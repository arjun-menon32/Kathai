import { useEffect, useState } from 'react'
import AppHeader, { type AppPage } from './components/AppHeader'
import DashboardPage from './pages/DashboardPage'
import JourneyPage from './pages/JourneyPage'
import MeasurementPage from './pages/MeasurementPage'
import ResearchPage from './pages/ResearchPage'
import SegmentsPage from './pages/SegmentsPage'

const pages: AppPage[] = ['overview', 'audiences', 'journey', 'measurement', 'research']

function pageFromHash(): AppPage {
  const candidate = window.location.hash.slice(1) as AppPage
  return pages.includes(candidate) ? candidate : 'overview'
}

function App() {
  const [activePage, setActivePage] = useState<AppPage>(pageFromHash)
  const [watermarkFlash, setWatermarkFlash] = useState(false)

  useEffect(() => {
    const syncPage = () => {
      setActivePage(pageFromHash())
      setWatermarkFlash(true)
      window.clearTimeout((syncPage as typeof syncPage & { timeout?: number }).timeout)
      ;(syncPage as typeof syncPage & { timeout?: number }).timeout = window.setTimeout(() => setWatermarkFlash(false), 240)
    }

    window.addEventListener('hashchange', syncPage)
    window.addEventListener('popstate', syncPage)
    return () => {
      window.removeEventListener('hashchange', syncPage)
      window.removeEventListener('popstate', syncPage)
      window.clearTimeout((syncPage as typeof syncPage & { timeout?: number }).timeout)
    }
  }, [])

  const navigate = (page: AppPage) => {
    window.history.pushState(null, '', `#${page}`)
    setActivePage(page)
    setWatermarkFlash(true)
    window.clearTimeout((navigate as typeof navigate & { timeout?: number }).timeout)
    ;(navigate as typeof navigate & { timeout?: number }).timeout = window.setTimeout(() => setWatermarkFlash(false), 240)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <AppHeader activePage={activePage} watermarkFlash={watermarkFlash} />
      <main className="page-wrap">
        {activePage === 'overview' && <DashboardPage onNavigate={navigate} />}
        {activePage === 'audiences' && <SegmentsPage />}
        {activePage === 'journey' && <JourneyPage />}
        {activePage === 'measurement' && <MeasurementPage />}
        {activePage === 'research' && <ResearchPage />}
      </main>
      <footer className="app-footer">
        Kathai <span aria-hidden="true">·</span> A story in every cup
      </footer>
    </div>
  )
}

export default App
