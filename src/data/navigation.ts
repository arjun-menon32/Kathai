export type AppSection = 'customer' | 'technology' | 'investor'

export type AppPage =
  | 'overview'
  | 'audiences'
  | 'journey'
  | 'measurement'
  | 'research'
  | 'experience'
  | 'data-intelligence'
  | 'smart-operations'
  | 'roadmap'
  | 'investment-overview'
  | 'market-opportunity'
  | 'business-model'
  | 'validation-traction'
  | 'growth-scale'
  | 'investment-case'

type NavigationItem = { id: AppPage; label: string }

export const sectionNavigation: { id: AppSection; label: string; page: AppPage }[] = [
  { id: 'customer', label: 'Customer Journey', page: 'overview' },
  { id: 'technology', label: 'Technology Journey', page: 'overview' },
  { id: 'investor', label: 'Investor Journey', page: 'investment-overview' },
]

export const pageNavigation: Record<AppSection, NavigationItem[]> = {
  customer: [
    { id: 'overview', label: 'Overview' },
    { id: 'audiences', label: 'Audiences' },
    { id: 'journey', label: 'Journey' },
    { id: 'measurement', label: 'Measures' },
    { id: 'research', label: 'Research' },
  ],
  technology: [
    { id: 'overview', label: 'Technology Overview' },
    { id: 'experience', label: 'Experience & Personalisation' },
    { id: 'data-intelligence', label: 'Data & Intelligence' },
    { id: 'smart-operations', label: 'Smart Operations' },
    { id: 'roadmap', label: 'Technology Roadmap' },
  ],
  investor: [
    { id: 'investment-overview', label: 'Investment Overview' },
    { id: 'market-opportunity', label: 'Market Opportunity' },
    { id: 'business-model', label: 'Business Model' },
    { id: 'validation-traction', label: 'Validation Plan' },
    { id: 'growth-scale', label: 'Growth & Scale' },
    { id: 'investment-case', label: 'Investment Case' },
  ],
}

export function hrefForPage(section: AppSection, page: AppPage) {
  return section === 'customer' ? `#${page}` : `#${section}/${page}`
}
