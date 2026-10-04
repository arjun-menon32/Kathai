export type StageName = 'Awareness' | 'Consideration' | 'Purchase and Experience' | 'Retention' | 'Advocacy'

export type AudienceId = 'general' | 'gen-z' | 'gen-alpha'

export type EvidenceStatus = 'Validated' | 'Working hypothesis' | 'To be validated' | 'Research question'

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
  id: string
  segment: AudienceId
  journeyRole?: 'young-consumer' | 'parent-guardian'
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
  evidenceStatus: EvidenceStatus
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
  id: 'young-consumer' | 'parent-guardian'
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
