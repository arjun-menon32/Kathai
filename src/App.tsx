import { useEffect, useState } from 'react'
import AppHeader from './components/AppHeader'
import { pageNavigation, sectionNavigation, type AppPage, type AppSection } from './data/navigation'
import DashboardPage from './pages/DashboardPage'
import InvestorJourneyPage from './pages/InvestorJourneyPage'
import JourneyPage from './pages/JourneyPage'
import MeasurementPage from './pages/MeasurementPage'
import ResearchPage from './pages/ResearchPage'
import SegmentsPage from './pages/SegmentsPage'
import TechnologyJourneyPage from './pages/TechnologyJourneyPage'

type AppRoute = { section: AppSection; page: AppPage }

function routeFromHash(): AppRoute {
  const [sectionSlug, pageSlug] = window.location.hash.slice(1).split('/')
  const section = sectionNavigation.find((item) => item.id === sectionSlug)?.id

  if (section) {
    const page = pageNavigation[section].find((item) => item.id === pageSlug)?.id
    return { section, page: page ?? pageNavigation[section][0].id }
  }

  const page = pageNavigation.customer.find((item) => item.id === sectionSlug)?.id
  return { section: 'customer', page: page ?? 'overview' }
}

function App() {
  const [route, setRoute] = useState<AppRoute>(routeFromHash)
  const [watermarkFlash, setWatermarkFlash] = useState(false)

  useEffect(() => {
    const syncPage = () => {
      setRoute(routeFromHash())
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
    setRoute({ section: 'customer', page })
    setWatermarkFlash(true)
    window.clearTimeout((navigate as typeof navigate & { timeout?: number }).timeout)
    ;(navigate as typeof navigate & { timeout?: number }).timeout = window.setTimeout(() => setWatermarkFlash(false), 240)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <AppHeader activeSection={route.section} activePage={route.page} watermarkFlash={watermarkFlash} />
      <main className="page-wrap">
        {route.section === 'customer' && route.page === 'overview' && <DashboardPage onNavigate={navigate} />}
        {route.section === 'customer' && route.page === 'audiences' && <SegmentsPage />}
        {route.section === 'customer' && route.page === 'journey' && <JourneyPage />}
        {route.section === 'customer' && route.page === 'measurement' && <MeasurementPage />}
        {route.section === 'customer' && route.page === 'research' && <ResearchPage />}
        {route.section === 'technology' && <TechnologyJourneyPage key={route.page} page={route.page} />}
        {route.section === 'investor' && <InvestorJourneyPage key={route.page} page={route.page} />}
      </main>
      <footer className="app-footer">
        Kathai <span aria-hidden="true">·</span> A story in every cup
      </footer>
    </div>
  )
}

export default App
