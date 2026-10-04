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

  useEffect(() => {
    const syncPage = () => setActivePage(pageFromHash())
    window.addEventListener('hashchange', syncPage)
    window.addEventListener('popstate', syncPage)
    return () => {
      window.removeEventListener('hashchange', syncPage)
      window.removeEventListener('popstate', syncPage)
    }
  }, [])

  const navigate = (page: AppPage) => {
    window.history.pushState(null, '', `#${page}`)
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <AppHeader activePage={activePage} />
      <main className="page-wrap">
        {activePage === 'overview' && <DashboardPage onNavigate={navigate} />}
        {activePage === 'audiences' && <SegmentsPage />}
        {activePage === 'journey' && <JourneyPage />}
        {activePage === 'measurement' && <MeasurementPage />}
        {activePage === 'research' && <ResearchPage />}
      </main>
      <footer className="app-footer">
        Kathai strategy view <span aria-hidden="true">·</span> Hypotheses and measures are not operating results
      </footer>
    </div>
  )
}

export default App
