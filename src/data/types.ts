export type StageName = 'Awareness' | 'Consideration' | 'Purchase and Experience' | 'Retention' | 'Advocacy'

export type AudienceId = 'general' | 'gen-z' | 'gen-alpha'

export type EvidenceStatus = 'Validated' | 'Working hypothesis' | 'To be validated' | 'Research question'
export type PersonaEvidenceStatus = EvidenceStatus | 'Exploratory'

export type ResearchSourceId =
  | 'AJJI-SUBKO-REPORT'
  | 'ARTISANAL-HC-COMPETITORS'
  | 'GOOGLE-GEN-Z-INDIA'
  | 'BOYLAND-FOOD-MARKETING-2022'
  | 'CHUNG-PARENT-APPEAL-2024'
  | 'SHAW-ADOLESCENT-ENVIRONMENT-2023'
  | 'PUNITHA-POCKET-MONEY-2014'
  | 'MAIZ-CHILD-FOOD-INVOLVEMENT-2021'
  | 'NRAI-FOOD-SERVICES-ABOUT'
  | 'IBEF-FOOD-SERVICES-2024'

export type ResearchFindingId =
  | 'ajji-cacao-tasting'
  | 'ajji-heritage-setting'
  | 'ajji-creator-practices'
  | 'ajji-safe-destination-conversation'
  | 'market-single-serve-gifting'
  | 'market-serving-value'
  | 'market-indian-cacao'
  | 'market-percentage-formats'
  | 'market-preparation-and-packaging'
  | 'market-subko-position'
  | 'google-gen-z-discovery'
  | 'child-food-marketing-effects'
  | 'parent-appeal-packaging'
  | 'adolescent-food-environment'
  | 'pocket-money-food-behaviour'
  | 'child-food-involvement'
  | 'india-food-services-context'

export type ResearchEvidenceType =
  | 'Primary field research'
  | 'Published consumer research'
  | 'Market benchmark'
  | 'Strategic interpretation'

export type PersonaId =
  | 'premium-experience-explorer'
  | 'urban-pause-seeker'
  | 'trusted-ritual-seeker'
  | 'young-independent-experience-collector'
  | 'creative-community-connector'
  | 'flavour-craft-enthusiast'
  | 'on-the-go-comfort-seeker'
  | 'gift-shared-moment-buyer'
  | 'traveller-self-heating-utility-seeker'
  | 'young-gen-alpha-participant'
  | 'pocket-money-treat-planner'
  | 'curious-ingredient-explorer'

export type Segment = {
  id: AudienceId
  label: string
  tagline: string
  detail: string
  focus: string[]
  priorities: string[]
  audienceNote: string
}

export type JourneyDetail = {
  stage: StageName
  objective: string
  actions: string[]
  questions: string[]
  touchpoints: string[]
  emotions: string[]
  negativeEmotion: string
  painPoints: string[]
  barriers: string[]
  opportunities: string[]
  response: string
  successMeasures: string[]
  researchQuestions: string[]
  evidenceStatus: EvidenceStatus
}

export type Persona = {
  id: PersonaId
  segment: AudienceId
  journeyRole?: 'young-consumer'
  statementQualifier?: string
  researchEvidence: PersonaResearchEvidence
  decisionProfile: PersonaDecisionProfile
  selfHeatingQuestion?: string
  guardianJourney?: GuardianJourneyStage[]
  name: string
  priority: 'Lead' | 'Lead · Gen Z weighted' | 'Secondary' | 'Exploratory' | 'Working hypothesis'
  needState: string
  recruitmentLens: string
  primaryContext: string
  launchFit: string
  profile: string
  jobToBeDone: string
  needs: string[]
  motivations: string[]
  challenges: string[]
  expectations: string[]
  alternatives: string[]
  occasions: string[]
  statement: string
  implications: string[]
  stageFocus: Partial<Record<StageName, string>>
  questionsToValidate: string[]
  evidenceStatus: PersonaEvidenceStatus
}

export type PersonaDecisionProfile = {
  primaryConsumerNeed: string
  uniquePurchaseMotivation: string
  primaryPurchaseOccasion: string
  mainPurchaseBarrier: string
  decisionMakingRole: string
  differentiation: string
  notThisPersonaWhen: string
  purchaseTriggers: string[]
  decisionFactors: string[]
  discoveryChannels?: string[]
  brandEngagementOpportunities: string[]
  repeatPurchaseDrivers: string[]
  advocacyDrivers: string[]
  overlapNote?: string
}

export type PersonaEvidenceSource = {
  title: string
  url: string
  studyContext: string
  supportedFinding: string
}

export type LegacyPersonaResearchEvidence = {
  statusLabel?: string
  publishedResearch: PersonaEvidenceSource[]
  interpretation: string
  kathaiAssumptions: string[]
  limitations: string[]
  localFindings: string
  futureLocalFindings: {
    researchDateAndLocation: string
    participantAgesAndRecruitment: string
    childGuardianPairCount: string
    observedBehaviourAndCounts: string
    contradictoryFindings: string
    profileAndJourneyImplications: string
  }
}

export type PersonaResearchEvidence = {
  statusLabel?: string
  consumerInsight: string
  whatThisMeansForKathai: string[]
  opportunitiesToExplore: string[]
  interpretation: string
  kathaiAssumptions: string[]
  limitations: string[]
  localFindings: string
  futureLocalFindings: {
    researchDateAndLocation: string
    participantAgesAndRecruitment: string
    childGuardianPairCount: string
    observedBehaviourAndCounts: string
    contradictoryFindings: string
    profileAndJourneyImplications: string
  }
}

export type ResearchSource = {
  id: ResearchSourceId
  title: string
  sourceType: ResearchEvidenceType
  url?: string
  originalPath?: string
  authors?: string
  publisher?: string
  publishedOn?: string
  accessedOn?: string
  researchContext: string
  limitations: string[]
}

export type ResearchFinding = {
  id: ResearchFindingId
  sourceId: ResearchSourceId
  location: string
  evidenceType: ResearchEvidenceType
  finding: string
  researchContext: string
  limitations: string[]
  references?: { label: string; url: string }[]
  personaIds: PersonaId[]
  implicationForKathai: string
}

export type GuardianJourneyStage = {
  stage: StageName
  childActions: string
  guardianActions: string
  decisionSupport: string
}

export type Touchpoint = {
  category: string
  name: string
  audience: string
  stage: StageName
  need: string
  minimumExperienceStandard: string
  commonFailure: string
  response: string
  evidenceStatus: EvidenceStatus
}

export type EmotionalPoint = {
  moment: string
  desiredEmotion: string
  negativeEmotion: string
  friction: string
  cause: string
  response: string
}

export type Metric = {
  category: string
  metric: string
  description: string
  evidenceStatus: EvidenceStatus
}

export type GenAlphaJourney = {
  id: 'young-consumer'
  title: string
  subtitle: string
  decisionRole: string
  priorities: string[]
  stages: {
    name: StageName
    goal: string
    actions: string[]
    questions: string[]
    kathaiResponse: string
  }[]
}

export type BlueprintStep = {
  step: string
  customerInteraction: string
  visibleService: string
  backstageCapability: string
  responsibleTeam: string
  failurePrevention: string
  measurement: string
}
