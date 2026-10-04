export type AppPage = 'overview' | 'audiences' | 'journey' | 'measurement' | 'research'

type AppHeaderProps = {
  activePage: AppPage
}

const navigation: { id: AppPage; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'audiences', label: 'Audiences' },
  { id: 'journey', label: 'Journey' },
  { id: 'measurement', label: 'Measures' },
  { id: 'research', label: 'Research' },
]

function AppHeader({ activePage }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <a className="brand-lockup" href="#overview" aria-label="Kathai overview">
          <img src="/BrandLogo.png" alt="Kathai" />
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activePage === item.id ? 'page' : undefined}
              className={activePage === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-watermark" aria-hidden="true">Utsav</div>
      </div>
    </header>
  )
}

export default AppHeader
