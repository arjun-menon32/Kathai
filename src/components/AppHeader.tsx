import { hrefForPage, pageNavigation, sectionNavigation, type AppPage, type AppSection } from '../data/navigation'

type AppHeaderProps = {
  activeSection: AppSection
  activePage: AppPage
  watermarkFlash?: boolean
}

function AppHeader({ activeSection, activePage, watermarkFlash = false }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <a className="brand-lockup" href="#overview" aria-label="Kathai overview">
          <img src={`${import.meta.env.BASE_URL}BrandLogo.png`} alt="Kathai" />
        </a>
        <div className={`header-watermark${watermarkFlash ? ' is-flashing' : ''}`} aria-hidden="true">Utsav</div>
      </div>
      <div className="section-nav-wrap">
        <nav className="section-nav" aria-label="Primary sections">
          {sectionNavigation.map((item) => (
            <a
              key={item.id}
              href={hrefForPage(item.id, item.page)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={activeSection === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="page-nav-wrap">
        <nav className="primary-nav" aria-label={`${sectionNavigation.find((item) => item.id === activeSection)?.label} pages`}>
          {pageNavigation[activeSection].map((item) => (
            <a
              key={item.id}
              href={hrefForPage(activeSection, item.id)}
              aria-current={activePage === item.id ? 'page' : undefined}
              className={activePage === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
