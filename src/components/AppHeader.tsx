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
          <span>INVESTOR BRIEF</span>
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
        <span className="header-status"><span /> Strategy view</span>
      </div>
    </header>
  )
}

export default AppHeader
