import type { EvidenceStatus, Metric } from './types'

export const metrics: Metric[] = [
  ...['Qualified reach', 'Branded search', 'Category understanding', 'Visit intent'].map((metric) => ({
    category: 'Awareness',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['Menu engagement', 'Review engagement', 'Reservation intent', 'Perceived-value score'].map((metric) => ({
    category: 'Consideration',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['Reservation completion', 'Arrival-to-order conversion', 'Wait time', 'Average spend', 'Sensory satisfaction', 'Service satisfaction', 'Perceived value', 'Return intent'].map((metric) => ({
    category: 'Purchase and Experience',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['30-day revisit', '60-day revisit', '90-day revisit', 'Second-visit satisfaction', 'Return reason', 'Churn reason'].map((metric) => ({
    category: 'Retention',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['Recommendation intent', 'Review rate', 'Referral visits', 'Gifted experiences', 'User-generated content', 'Word-of-mouth acquisition'].map((metric) => ({
    category: 'Advocacy',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
]
