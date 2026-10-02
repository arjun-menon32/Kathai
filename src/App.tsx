import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Coffee,
  Download,
  HeartHandshake,
  MapPinned,
  Menu,
  Printer,
  Search,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import {
  emotionalJourney,
  experienceBlueprint,
  genAlphaJourneys,
  journeyStages,
  metrics,
  opportunityMatrix,
  personas,
  segmentJourney,
  segments,
  sources,
  contextualLinks,
  researchReferences,
  touchpoints,
  type AudienceId,
  type StageName,
} from './data/journeyData'

function App() {
  const [selectedSegment, setSelectedSegment] = useState<AudienceId>('general')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedStage, setSelectedStage] = useState<StageName>('Awareness')
  const [compareMode, setCompareMode] = useState(false)
  const [compareStage, setCompareStage] = useState(false)
  const [location, setLocation] = useState<'bengaluru' | 'india'>('bengaluru')
  const [alphaPerspective, setAlphaPerspective] = useState<'young-consumer' | 'parent-guardian'>('young-consumer')
  const [touchpointCategory, setTouchpointCategory] = useState('All touchpoints')
  const [personaNeedFilter, setPersonaNeedFilter] = useState('All need states')
  const [personaOccasionFilter, setPersonaOccasionFilter] = useState('All occasions')
  const [personaPriorityFilter, setPersonaPriorityFilter] = useState('All priorities')
  const [personaStageFilter, setPersonaStageFilter] = useState<'All journey stages' | StageName>('All journey stages')
  const [selectedEmotion, setSelectedEmotion] = useState(0)
  const [insight, setInsight] = useState<{ title: string; eyebrow: string; body: string; details: string[] } | null>(null)
  const lastTap = useRef<{ key: string; at: number } | null>(null)

  useEffect(() => {
    if (!insight) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setInsight(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [insight])

  const handleTap = (key: string, timestamp: number, onSingleTap: () => void, onDoubleTap: () => void) => {
    const now = timestamp
    if (lastTap.current?.key === key && now - lastTap.current.at < 380) {
      lastTap.current = null
      onDoubleTap()
      return
    }

    lastTap.current = { key, at: now }
    onSingleTap()
  }

  const openPersona = (persona: (typeof personas)[number]) => {
    setInsight({
      title: persona.name,
      eyebrow: `${selectedSegmentData.label} · ${persona.priority} persona`,
      body: persona.jobToBeDone,
      details: [
        `Evidence status: ${persona.evidenceStatus}`,
        `Need state: ${persona.needState}`,
        `Recruitment lens: ${persona.recruitmentLens}`,
        `Primary context: ${persona.primaryContext}`,
        `Launch fit: ${persona.launchFit}`,
        `Profile: ${persona.profile}`,
        `Needs: ${persona.needs.join('; ')}`,
        `Motivations: ${persona.motivations.join('; ')}`,
        `Challenges: ${persona.challenges.join('; ')}`,
        `Expectations: ${persona.expectations.join('; ')}`,
        `Alternatives: ${persona.alternatives.join('; ')}`,
        `Occasions: ${persona.occasions.join('; ')}`,
        `Journey implications: ${persona.implications.join('; ')}`,
        ...Object.entries(persona.stageFocus).map(([stage, focus]) => `${stage}: ${focus}`),
        `Questions to validate: ${persona.questionsToValidate.join('; ')}`,
      ],
    })
  }

  const selectAudience = (audience: AudienceId) => {
    setSelectedSegment(audience)
    setSelectedStage('Awareness')
    setCompareStage(false)
    setTouchpointCategory('All touchpoints')
    setPersonaNeedFilter('All need states')
    setPersonaOccasionFilter('All occasions')
    setPersonaPriorityFilter('All priorities')
    setPersonaStageFilter('All journey stages')
    setMobileMenuOpen(false)
  }

  const selectedSegmentData = segments.find((segment) => segment.id === selectedSegment) ?? segments[0]
  const journeyDetails = segmentJourney[selectedSegment]

  const stageDetail = journeyDetails.find((detail) => detail.stage === selectedStage) ?? journeyDetails[0]

  const segmentPersonas = useMemo(
    () => personas.filter((persona) => persona.segment === selectedSegment),
    [selectedSegment],
  )

  const personaList = segmentPersonas.filter((persona) =>
      (personaNeedFilter === 'All need states' || persona.needState === personaNeedFilter) &&
      (personaOccasionFilter === 'All occasions' || persona.occasions.includes(personaOccasionFilter)) &&
      (personaPriorityFilter === 'All priorities' || persona.priority === personaPriorityFilter) &&
      (personaStageFilter === 'All journey stages' || persona.stageFocus[personaStageFilter] !== undefined),
  )

  const personaNeedOptions = Array.from(new Set(segmentPersonas.map((persona) => persona.needState)))
  const personaOccasionOptions = Array.from(new Set(segmentPersonas.flatMap((persona) => persona.occasions)))
  const personaPriorityOptions = Array.from(new Set(segmentPersonas.map((persona) => persona.priority)))
  const personaStageOptions = journeyStages.filter((stage) =>
    segmentPersonas.some((persona) => persona.stageFocus[stage] !== undefined),
  )

  const touchpointList = useMemo(
    () =>
      touchpoints.filter(
        (item) =>
          (item.audience === 'All' ||
            item.audience === selectedSegmentData.label ||
            item.audience === 'General Premium Audience') &&
          (touchpointCategory === 'All touchpoints' || item.category === touchpointCategory),
      ),
    [selectedSegmentData.label, touchpointCategory],
  )

  const touchpointCategories = ['All touchpoints', ...Array.from(new Set(touchpoints.map((item) => item.category)))]

  const downloadJourneySummary = () => {
    const lines = [
      `# Kathai journey summary — ${selectedSegmentData.label}`,
      '',
      selectedSegmentData.detail,
      '',
      '## Persona profiles',
      ...segmentPersonas.flatMap((persona) => [
        '',
        `### ${persona.name} — ${persona.priority} (${persona.evidenceStatus})`,
        `Need state: ${persona.needState}`,
        `Core job: ${persona.jobToBeDone}`,
        `Needs: ${persona.needs.join('; ')}`,
        `Motivations: ${persona.motivations.join('; ')}`,
        `Challenges: ${persona.challenges.join('; ')}`,
        `Expectations: ${persona.expectations.join('; ')}`,
        `Alternatives: ${persona.alternatives.join('; ')}`,
        `Occasions: ${persona.occasions.join('; ')}`,
        `Recruitment lens: ${persona.recruitmentLens}`,
        `Launch fit: ${persona.launchFit}`,
        `Journey implications: ${persona.implications.join('; ')}`,
        `Questions to validate: ${persona.questionsToValidate.join('; ')}`,
      ]),
      '',
      '## Journey stages',
      ...journeyDetails.flatMap((detail) => [
        '',
        `### ${detail.stage} (${detail.evidenceStatus})`,
        `Goal: ${detail.objective}`,
        `Actions: ${detail.actions.join('; ')}`,
        `Questions: ${detail.questions.join('; ')}`,
        `Touchpoints: ${detail.touchpoints.join('; ')}`,
        `Emotions: ${detail.emotions.join('; ')}; uncertainty: ${detail.negativeEmotion}`,
        `Pain points: ${detail.painPoints.join('; ')}`,
        `Barriers: ${detail.barriers.join('; ')}`,
        `Opportunities: ${detail.opportunities.join('; ')}`,
        `Kathai response: ${detail.response}`,
        `Success measures: ${detail.successMeasures.join('; ')}`,
        `Research questions: ${detail.researchQuestions.join('; ')}`,
      ]),
      '',
      'Price framing: ₹450–₹600 is treated as an experience-led premium spend.',
      'Evidence note: Journey measures are recommendations, not existing performance results.',
      'Source: Kathai Complete Customer Journey Map (primary source).',
    ]
    const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `kathai-${selectedSegment}-journey-summary.md`
    document.body.append(anchor)
    anchor.click()
    anchor.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(61,32,22,0.12)] bg-[rgba(244,239,231,0.9)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--cocoa-900)]/20 bg-[var(--card)] text-[var(--cocoa-900)] shadow-sm">
              <Coffee size={18} />
            </div>
            <div>
              <div className="kathai-word nav-mark">Kathai</div>
            </div>
          </div>

          <nav id="primary-navigation" aria-label="Primary navigation" className={`primary-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
            {[
              ['About', '#about'],
              ['Audiences', '#audience'],
              ['Personas', '#personas'],
              ['Journey', '#journey-map'],
              ['Touchpoints', '#touchpoints'],
              ['Blueprint', '#blueprint'],
              ['Measures', '#metrics'],
              ['Sources', '#sources'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="primary-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--cocoa-900)]/20 bg-[var(--cocoa-900)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
            >
              <Printer size={15} />
              <span className="print-label">Print view</span>
            </button>
            <button
              type="button"
              onClick={downloadJourneySummary}
              className="hidden items-center gap-2 rounded-full border border-[var(--cocoa-900)]/20 bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--cocoa-900)] transition hover:bg-white sm:inline-flex"
            >
              <Download size={15} />
              Download
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="grid gap-10 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--cocoa-900)]/15 bg-[var(--card)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              <Sparkles size={12} />
              Premium hot chocolate customer journey
            </div>
            <div className="kathai-word hero-word">Kathai</div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Kathai is not simply a premium hot chocolate drink. It is a story-led experience built
              around taste, comfort, discovery and human connection.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#journey-map"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--cocoa-900)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(61,32,22,0.18)] transition hover:-translate-y-0.5"
              >
                Explore the journey
                <ArrowRight size={16} />
              </a>
              <button
                type="button"
                onClick={() => setCompareMode((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--cocoa-900)]/20 bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--cocoa-900)] transition hover:bg-[rgba(255,255,255,0.75)]"
              >
                <BarChart3 size={16} />
                {compareMode ? 'Hide comparison' : 'Compare segments'}
              </button>
            </div>
            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {journeyStages.map((stage) => (
                <a
                  key={stage}
                  href="#journey-map"
                  onClick={() => setSelectedStage(stage)}
                  className="rounded-2xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-3 text-center no-underline transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Stage</div>
                  <div className="mt-2 text-sm font-semibold text-[var(--cocoa-900)]">{stage}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--cocoa-900)]/10 bg-[linear-gradient(135deg,#f8f1ea,#efe4d3)] p-5 shadow-[0_30px_60px_rgba(90,56,39,0.08)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Journey map preview</span>
              <span className="rounded-full bg-[rgba(180,126,74,0.12)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--cocoa-900)]">
                A connected loop
              </span>
            </div>
            <div className="space-y-3">
              {journeyDetails.map((detail, index) => (
                <motion.button
                  key={detail.stage}
                  type="button"
                  aria-label={`Open ${detail.stage} journey stage; double-tap for a summary`}
                  onClick={(event) =>
                    handleTap(
                      `preview-${detail.stage}`,
                      event.timeStamp,
                      () => setSelectedStage(detail.stage),
                      () => {
                        setSelectedStage(detail.stage)
                        setInsight({
                          title: detail.stage,
                          eyebrow: `${selectedSegmentData.label} · journey stage`,
                          body: detail.objective,
                          details: [
                            `Customer actions: ${detail.actions.join('; ')}`,
                            `Touchpoints: ${detail.touchpoints.join('; ')}`,
                            `Opportunity: ${detail.opportunities.join('; ')}`,
                          ],
                        })
                      },
                    )
                  }
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="journey-preview-item flex w-full items-center gap-3 rounded-2xl border border-[var(--cocoa-900)]/10 bg-[rgba(255,255,255,0.35)] p-3 text-left"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[var(--cocoa-900)]">{detail.stage}</div>
                    <div className="text-xs leading-5 text-[var(--muted)]">{detail.objective}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <MapPinned size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">About the journey map</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Experience-first strategy</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Positioning</div>
              <p className="text-[15px] leading-7 text-[var(--muted)]">
                Kathai is designed as a premium experience-led hot chocolate concept for Bengaluru with later India expansion.
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Price framing</div>
              <p className="text-[15px] leading-7 text-[var(--muted)]">
                The brand treats ₹450–₹600 as an experience spend, not as a convenience, quick-commerce or discount-led purchase.
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Validation standard</div>
              <p className="text-[15px] leading-7 text-[var(--muted)]">
                Working hypotheses are clearly flagged, and all strategic indicators are framed as recommendations rather than confirmed performance data.
              </p>
            </div>
          </div>
        </section>

        <section id="audience" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Audience segment selector</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Who is this experience for?</h2>
            </div>
            <button
              type="button"
              onClick={() => setCompareMode((value) => !value)}
              className="rounded-full border border-[var(--cocoa-900)]/20 bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--cocoa-900)] transition hover:bg-white"
            >
              {compareMode ? 'Return to selected segment' : 'Compare segments'}
            </button>
          </div>

          {compareMode ? (
            <div className="grid gap-4 md:grid-cols-3">
              {segments.map((segment) => (
                <div key={segment.id} className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{segment.label}</span>
                    <button
                      type="button"
                      onClick={() => {
                        selectAudience(segment.id)
                        setCompareMode(false)
                      }}
                      className="text-sm font-medium text-[var(--cocoa-900)]"
                    >
                      View
                    </button>
                  </div>
                  <p className="mb-4 text-sm leading-6 text-[var(--muted)]">{segment.tagline}</p>
                  <div className="space-y-3">
                    {segment.focus.map((item) => (
                      <div key={item} className="rounded-2xl bg-[rgba(94,57,41,0.04)] px-3 py-2 text-sm text-[var(--muted)]">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-[var(--cocoa-900)]/10 pt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Experience emphasis</div>
                    <p className="mt-2 text-sm leading-6 text-[var(--cocoa-900)]">{segmentJourney[segment.id][2].objective}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Choose an audience segment">
                {segments.map((segment) => (
                  <button
                    key={segment.id}
                    type="button"
                    aria-pressed={segment.id === selectedSegment}
                    onClick={() => selectAudience(segment.id)}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      segment.id === selectedSegment
                        ? 'bg-[var(--cocoa-900)] text-white shadow-[0_8px_20px_rgba(61,32,22,0.14)]'
                        : 'border border-[var(--cocoa-900)]/15 bg-[var(--card)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--cocoa-900)]'
                    }`}
                  >
                    {segment.label}
                  </button>
                ))}
              </div>
              <article
                key={selectedSegment}
                className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5 sm:p-6"
              >
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  <CheckCircle2 size={15} className="text-[var(--gold)]" />
                  Selected audience
                </div>
                <h3 className="text-2xl font-semibold text-[var(--cocoa-900)]">{selectedSegmentData.label}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">{selectedSegmentData.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedSegmentData.focus.map((item) => (
                    <span key={item} className="rounded-full bg-[rgba(94,57,41,0.06)] px-3 py-1.5 text-xs font-medium text-[var(--cocoa-900)]">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-4 border-t border-[var(--cocoa-900)]/10 pt-4 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--cocoa-900)]">Audience lens:</span> {selectedSegmentData.audienceNote}
                </p>
              </article>
            </div>
          )}
        </section>

        <section id="personas" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <Users size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Persona explorer</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">{personas.filter((persona) => persona.segment === selectedSegment).length} profiles · {selectedSegmentData.label}</h2>
            </div>
          </div>

          <p className="mb-5 max-w-3xl text-sm leading-6 text-[var(--muted)]">
            Profiles are working hypotheses to validate through research, not fixed demographic types; one person may move between profiles by occasion. Gen Alpha also has two separate role profiles for the requested dual journey.
          </p>
          <div className="mb-5 grid gap-3 rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-4 sm:grid-cols-2 xl:grid-cols-4">
            <label className="persona-filter">
              <span>Need state</span>
              <select value={personaNeedFilter} onChange={(event) => setPersonaNeedFilter(event.target.value)}>
                <option>All need states</option>
                {personaNeedOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="persona-filter">
              <span>Occasion</span>
              <select value={personaOccasionFilter} onChange={(event) => setPersonaOccasionFilter(event.target.value)}>
                <option>All occasions</option>
                {personaOccasionOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="persona-filter">
              <span>Priority</span>
              <select value={personaPriorityFilter} onChange={(event) => setPersonaPriorityFilter(event.target.value)}>
                <option>All priorities</option>
                {personaPriorityOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="persona-filter">
              <span>Journey stage</span>
              <select
                value={personaStageFilter}
                onChange={(event) => {
                  const value = event.target.value
                  const matchingStage = journeyStages.find((stage) => stage === value)
                  setPersonaStageFilter(value === 'All journey stages' ? value : matchingStage ?? 'All journey stages')
                }}
              >
                <option>All journey stages</option>
                {personaStageOptions.map((stage) => <option key={stage}>{stage}</option>)}
              </select>
            </label>
          </div>
          <div className="mb-4 flex items-center justify-between text-xs text-[var(--muted)]">
            <span>Showing {personaList.length} matching profile{personaList.length === 1 ? '' : 's'}</span>
            <button
              type="button"
              onClick={() => {
                setPersonaNeedFilter('All need states')
                setPersonaOccasionFilter('All occasions')
                setPersonaPriorityFilter('All priorities')
                setPersonaStageFilter('All journey stages')
              }}
              className="font-semibold text-[var(--cocoa-900)] underline decoration-[var(--gold)] underline-offset-4"
            >
              Clear filters
            </button>
          </div>
          {personaList.length === 0 && (
            <div className="mb-4 rounded-2xl border border-dashed border-[var(--cocoa-900)]/20 bg-[var(--card)] p-6 text-sm text-[var(--muted)]">
              No profiles match all these filters. Clear or adjust a filter to explore the segment.
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {personaList.map((persona) => (
              <article
                key={persona.id}
                className="interactive-card rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5 text-left"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Priority</div>
                    <div className="text-sm font-semibold text-[var(--cocoa-900)]">{persona.priority}</div>
                  </div>
                  <div className="rounded-full bg-[rgba(180,126,74,0.12)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--cocoa-900)]">
                    {persona.evidenceStatus}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--cocoa-900)]">{persona.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{persona.profile}</p>
                <div className="mt-4 space-y-2 rounded-2xl bg-[rgba(94,57,41,0.035)] p-3 text-xs leading-5 text-[var(--muted)]">
                  <p><strong className="text-[var(--cocoa-900)]">Recruitment lens:</strong> {persona.recruitmentLens}</p>
                  <p><strong className="text-[var(--cocoa-900)]">Primary context:</strong> {persona.primaryContext}</p>
                  <p><strong className="text-[var(--cocoa-900)]">Launch fit:</strong> {persona.launchFit}</p>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Core job</div>
                    <p className="text-sm text-[var(--ink)]">{persona.jobToBeDone}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Needs</div>
                    <div className="flex flex-wrap gap-2">
                      {persona.needs.map((need) => (
                        <span key={need} className="rounded-full bg-[rgba(94,57,41,0.04)] px-2.5 py-1 text-xs text-[var(--muted)]">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Motivations</div>
                      <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                        {persona.motivations.map((item) => <li key={item}>· {item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Challenges</div>
                      <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                        {persona.challenges.map((item) => <li key={item}>· {item}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Occasions</div>
                    <p className="text-sm leading-6 text-[var(--muted)]">{persona.occasions.join(' · ')}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Expectations</div>
                    <p className="text-sm leading-6 text-[var(--muted)]">{persona.expectations.join(' · ')}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Current alternatives</div>
                    <p className="text-sm leading-6 text-[var(--muted)]">{persona.alternatives.join(' · ')}</p>
                  </div>
                  <div className="rounded-2xl border-l-2 border-[var(--gold)] bg-[rgba(94,57,41,0.025)] p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">At {selectedStage}</div>
                    <p className="text-sm leading-6 text-[var(--muted)]">{persona.stageFocus[selectedStage]}</p>
                  </div>
                  {persona.statement && (
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Illustrative statement</div>
                    <p className="text-sm italic text-[var(--cocoa-900)]">“{persona.statement}”</p>
                  </div>
                  )}
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Journey implications</div>
                    <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                      {persona.implications.map((implication) => <li key={implication}>· {implication}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Questions to validate</div>
                    <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                      {persona.questionsToValidate.map((question) => <li key={question}>· {question}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 border-t border-[var(--cocoa-900)]/10 pt-4">
                  <button
                    type="button"
                    onClick={() => openPersona(persona)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--cocoa-900)] transition hover:gap-3"
                  >
                    View full persona <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedSegment === 'gen-alpha' && (
          <section id="family-journey" className="py-8 lg:py-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
                <Users size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Two connected journeys · Gen Alpha</p>
                <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Young consumer curiosity, guardian trust</h2>
              </div>
            </div>
            <div className="mb-5 grid gap-3 sm:grid-cols-2" role="tablist" aria-label="Gen Alpha journey perspective">
              {genAlphaJourneys.map((journey) => (
                <button
                  key={journey.id}
                  id={`tab-${journey.id}`}
                  type="button"
                  role="tab"
                  aria-selected={alphaPerspective === journey.id}
                  aria-controls="alpha-journey-panel"
                  onClick={() => setAlphaPerspective(journey.id)}
                  className={`rounded-2xl border px-5 py-4 text-left transition ${
                    alphaPerspective === journey.id
                      ? 'border-[var(--cocoa-900)] bg-[var(--cocoa-900)] text-white shadow-[var(--shadow-soft)]'
                      : 'border-[var(--cocoa-900)]/10 bg-[var(--card)] text-[var(--cocoa-900)] hover:border-[var(--gold)]'
                  }`}
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.17em] opacity-75">{journey.title}</span>
                  <span className="mt-1 block text-lg font-semibold">{journey.subtitle}</span>
                </button>
              ))}
            </div>
            {genAlphaJourneys.filter((journey) => journey.id === alphaPerspective).map((journey) => (
              <div
                key={journey.id}
                id="alpha-journey-panel"
                role="tabpanel"
                aria-labelledby={`tab-${journey.id}`}
                className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5 sm:p-7"
              >
                <div className="mb-6 grid gap-5 border-b border-[var(--cocoa-900)]/10 pb-6 md:grid-cols-[1fr_0.8fr]">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{journey.title} journey</div>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--cocoa-900)]">{journey.subtitle}</h3>
                  </div>
                  <p className="text-sm leading-6 text-[var(--muted)]">{journey.decisionRole}</p>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {journey.priorities.map((priority) => (
                    <span key={priority} className="rounded-full bg-[rgba(184,137,90,0.13)] px-3 py-1.5 text-xs font-medium text-[var(--cocoa-900)]">{priority}</span>
                  ))}
                </div>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                  {journey.stages.map((stage, index) => (
                    <article key={stage.name} className="rounded-2xl border border-[var(--cocoa-900)]/10 bg-[rgba(94,57,41,0.025)] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">0{index + 1}</span>
                        <span className="rounded-full bg-[var(--card)] px-2 py-1 text-[10px] text-[var(--muted)]">{stage.name}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-[var(--cocoa-900)]">{stage.goal}</h4>
                      <div className="mt-4">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Actions / questions</div>
                        <ul className="mt-2 space-y-2 text-xs leading-5 text-[var(--muted)]">
                          {[...stage.actions, ...stage.questions].map((item) => <li key={item}>· {item}</li>)}
                        </ul>
                      </div>
                      <div className="mt-4 border-t border-[var(--cocoa-900)]/10 pt-3">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Kathai response</div>
                        <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{stage.kathaiResponse}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="mt-5 rounded-xl bg-[rgba(184,137,90,0.11)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
                  Responsible design: guardians retain purchase authority. Do not use urgency, hidden persuasion, child-directed purchase prompts, or pressure to share content. Details remain working hypotheses to validate with families.
                </p>
              </div>
            ))}
          </section>
        )}

        <section id="journey-map" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <Search size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Interactive journey map</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">{selectedSegmentData.label}</h2>
            </div>
          </div>
          <p className="mb-5 max-w-3xl text-base leading-7 text-[var(--muted)]">{selectedSegmentData.detail}</p>
          <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
            <span className="font-semibold uppercase tracking-[0.14em] text-[var(--cocoa-900)]">Not a funnel</span>
            <span>Guests can discover through different touchpoints, compare alternatives, pause, return, or move between stages. Use the stage controls to explore each entry point.</span>
          </div>

          <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
              {journeyStages.map((stage) => (
                <button
                  key={stage}
                  type="button"
                  aria-pressed={selectedStage === stage}
                  aria-label={`${stage} stage. Tap to select; double-tap for details.`}
                  onClick={(event) =>
                    handleTap(
                      `stage-${stage}`,
                      event.timeStamp,
                      () => setSelectedStage(stage),
                      () => {
                        setSelectedStage(stage)
                        const detail = segmentJourney[selectedSegment].find((item) => item.stage === stage)
                        if (detail) {
                          setInsight({
                            title: detail.stage,
                            eyebrow: `${selectedSegmentData.label} · journey stage`,
                            body: detail.objective,
                            details: [
                              `Actions: ${detail.actions.join('; ')}`,
                              `Questions: ${detail.questions.join('; ')}`,
                              `Touchpoints: ${detail.touchpoints.join('; ')}`,
                              `Needs and emotions: ${detail.emotions.join(', ')}; uncertainty: ${detail.negativeEmotion}`,
                              `Pain points: ${detail.painPoints.join('; ')}`,
                              `Barriers: ${detail.barriers.join('; ')}`,
                              `Opportunities: ${detail.opportunities.join('; ')}`,
                              `Kathai response: ${detail.response}`,
                              `Measures: ${detail.successMeasures.join('; ')}`,
                              `Research: ${detail.researchQuestions.join('; ')}`,
                              `Evidence status: ${detail.evidenceStatus}`,
                            ],
                          })
                        }
                      },
                    )
                  }
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedStage === stage
                      ? 'bg-[var(--cocoa-900)] text-white'
                      : 'border border-[var(--cocoa-900)]/10 bg-[rgba(94,57,41,0.03)] text-[var(--muted)]'
                  }`}
                >
                  {stage}
                </button>
              ))}
              </div>
              <button
                type="button"
                aria-pressed={compareStage}
                onClick={() => setCompareStage((value) => !value)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  compareStage ? 'bg-[rgba(184,137,90,0.2)] text-[var(--cocoa-900)]' : 'border border-[var(--cocoa-900)]/10 text-[var(--muted)] hover:border-[var(--gold)]'
                }`}
              >
                {compareStage ? 'Close stage comparison' : 'Compare this stage'}
              </button>
            </div>

            {compareStage && (
              <div className="mb-5 grid gap-3 border-b border-[var(--cocoa-900)]/10 pb-5 md:grid-cols-3">
                {segments.map((segment) => {
                  const comparison = segmentJourney[segment.id].find((detail) => detail.stage === selectedStage)
                  if (!comparison) return null
                  return (
                    <article key={segment.id} className="rounded-2xl bg-[rgba(94,57,41,0.035)] p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--gold)]">{segment.label}</div>
                      <h3 className="mt-2 text-sm font-semibold text-[var(--cocoa-900)]">{comparison.objective}</h3>
                      <p className="mt-3 text-xs leading-5 text-[var(--muted)]"><strong>Pain point:</strong> {comparison.painPoints.join('; ')}</p>
                      <p className="mt-2 text-xs leading-5 text-[var(--muted)]"><strong>Opportunity:</strong> {comparison.opportunities.join('; ')}</p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">{comparison.evidenceStatus}</p>
                    </article>
                  )
                })}
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={stageDetail.stage}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[rgba(236,220,202,0.35)] p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{stageDetail.stage}</div>
                    <span className="rounded-full bg-[rgba(180,126,74,0.14)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--cocoa-900)]">
                      {stageDetail.evidenceStatus}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--cocoa-900)]">{stageDetail.objective}</h3>
                  <div className="mt-4">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Segment needs and motivations</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedSegmentData.focus.map((focus) => (
                        <span key={focus} className="rounded-full border border-[var(--cocoa-900)]/10 bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted)]">{focus}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Customer actions</div>
                      <ul className="space-y-2 text-sm text-[var(--muted)]">
                        {stageDetail.actions.map((action) => (
                          <li key={action} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Questions</div>
                      <ul className="space-y-2 text-sm text-[var(--muted)]">
                        {stageDetail.questions.map((question) => (
                          <li key={question} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--caramel)]" />
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Kathai response</div>
                    <p className="text-sm leading-6 text-[var(--muted)]">{stageDetail.response}</p>
                  </div>
                  <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Pain points and barriers</div>
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                      {stageDetail.painPoints.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                      {stageDetail.barriers.map((barrier) => (
                        <li key={barrier}>• Barrier: {barrier}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Touchpoints · opportunity</div>
                    <p className="text-sm leading-6 text-[var(--muted)]">{stageDetail.touchpoints.join(' · ')}</p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                      {stageDetail.opportunities.map((opportunity) => (
                        <li key={opportunity}>• {opportunity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Emotion · research question</div>
                    <p className="text-sm leading-6 text-[var(--muted)]">
                      {stageDetail.emotions.join(' · ')} <span className="text-[var(--gold)]">/</span> {stageDetail.negativeEmotion}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stageDetail.researchQuestions.join(' ')}</p>
                  </div>
                  <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Success measures</div>
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                      {stageDetail.successMeasures.map((measure) => (
                        <li key={measure}>• {measure}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <HeartHandshake size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Emotional journey</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">How moments feel across the experience</h2>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
            <p className="mb-5 text-sm text-[var(--muted)]">
              A qualitative map of moments that matter—not a measured emotion score. Select a moment to explore the desired feeling and possible friction.
            </p>
            <div className="emotion-track" role="group" aria-label="Select an emotional journey moment">
              {emotionalJourney.map((point, index) => (
                <button
                  key={point.moment}
                  type="button"
                  aria-pressed={selectedEmotion === index}
                  aria-label={`${point.moment}: desired emotion ${point.desiredEmotion}; double-tap for detail`}
                  onClick={(event) =>
                    handleTap(
                      `emotion-${index}`,
                      event.timeStamp,
                      () => setSelectedEmotion(index),
                      () => {
                        setSelectedEmotion(index)
                        setInsight({
                          title: point.moment,
                          eyebrow: 'Emotional journey · moment that matters',
                          body: point.response,
                          details: [
                            `Desired emotion: ${point.desiredEmotion}`,
                            `Potential negative emotion: ${point.negativeEmotion}`,
                            `Cause of friction: ${point.cause}`,
                            `Friction: ${point.friction}`,
                          ],
                        })
                      },
                    )
                  }
                  className={`emotion-stop ${selectedEmotion === index ? 'is-active' : ''}`}
                >
                  <span className="emotion-stop-marker">{String(index + 1).padStart(2, '0')}</span>
                  <span className="emotion-stop-name">{point.moment}</span>
                </button>
              ))}
            </div>
            {(() => {
              const point = emotionalJourney[selectedEmotion]
              return (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={point.moment}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mt-6 grid gap-4 rounded-3xl bg-[rgba(94,57,41,0.04)] p-5 md:grid-cols-[0.85fr_1.15fr]"
                  >
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Moment that matters</div>
                      <h3 className="mt-2 text-2xl font-semibold text-[var(--cocoa-900)]">{point.moment}</h3>
                      <p className="mt-3 text-sm text-[var(--muted)]">
                        Desired: <strong className="text-[var(--cocoa-900)]">{point.desiredEmotion}</strong>
                        <span className="mx-2 text-[var(--gold)]">·</span>
                        Risk: {point.negativeEmotion}
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Cause of friction</div>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{point.cause}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Recommended response</div>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{point.response}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )
            })()}
            <p className="mt-4 text-right text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">Select once · double-tap for a focused view</p>
          </div>
        </section>

        <section id="touchpoints" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Touchpoint explorer</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">What must each interaction deliver?</h2>
            </div>
          </div>

          <div className="mb-5 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter touchpoints by category">
            {touchpointCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={touchpointCategory === category}
                onClick={() => setTouchpointCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  touchpointCategory === category
                    ? 'bg-[var(--cocoa-900)] text-white'
                    : 'border border-[var(--cocoa-900)]/10 bg-[var(--card)] text-[var(--muted)] hover:border-[var(--gold)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mb-4 text-xs text-[var(--muted)]">{touchpointList.length} touchpoints for {selectedSegmentData.label.toLowerCase()}</p>
          {touchpointList.length === 0 && (
            <div className="rounded-2xl border border-dashed border-[var(--cocoa-900)]/20 bg-[var(--card)] p-6 text-sm text-[var(--muted)]">
              No touchpoints in this category are currently mapped to {selectedSegmentData.label}. Switch category or treat this as an open research gap.
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {touchpointList.map((touchpoint) => (
              <article
                key={touchpoint.name}
                tabIndex={0}
                role="button"
                aria-label={`${touchpoint.name}. Double-tap or press Enter for touchpoint detail.`}
                onClick={(event) =>
                  handleTap(
                    `touchpoint-${touchpoint.name}`,
                    event.timeStamp,
                    () => undefined,
                    () =>
                      setInsight({
                        title: touchpoint.name,
                        eyebrow: `${touchpoint.category} · ${touchpoint.stage}`,
                        body: touchpoint.need,
                        details: [
                          `Minimum experience standard: ${touchpoint.minimumExperienceStandard}`,
                          `Common failure: ${touchpoint.commonFailure}`,
                          `Recommended Kathai response: ${touchpoint.response}`,
                          `Audience: ${touchpoint.audience}`,
                          `Evidence status: ${touchpoint.evidenceStatus}`,
                        ],
                      }),
                  )
                }
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setInsight({
                      title: touchpoint.name,
                      eyebrow: `${touchpoint.category} · ${touchpoint.stage}`,
                      body: touchpoint.need,
                      details: [
                        `Minimum experience standard: ${touchpoint.minimumExperienceStandard}`,
                        `Common failure: ${touchpoint.commonFailure}`,
                        `Recommended Kathai response: ${touchpoint.response}`,
                        `Audience: ${touchpoint.audience}`,
                        `Evidence status: ${touchpoint.evidenceStatus}`,
                      ],
                    })
                  }
                }}
                className="interactive-card rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5 text-left"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{touchpoint.category}</span>
                  <span className="rounded-full bg-[rgba(180,126,74,0.12)] px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-[var(--cocoa-900)]">
                    {touchpoint.stage}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--cocoa-900)]">{touchpoint.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)]">Need:</span> {touchpoint.need}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)]">Minimum experience standard:</span> {touchpoint.minimumExperienceStandard}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)]">Recommended response:</span> {touchpoint.response}
                </p>
                <details className="mt-4 border-t border-[var(--cocoa-900)]/10 pt-3">
                  <summary className="cursor-pointer text-xs font-semibold text-[var(--cocoa-900)]">Common failure and evidence</summary>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]"><span className="font-semibold text-[var(--ink)]">Failure:</span> {touchpoint.commonFailure}</p>
                  <p className="mt-2 text-xs text-[var(--muted)]">Evidence status: {touchpoint.evidenceStatus} · Audience: {touchpoint.audience}</p>
                </details>
                <div className="mt-4 border-t border-[var(--cocoa-900)]/10 pt-3 text-xs font-medium text-[var(--muted)]">Double-tap for detail</div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Self-heating experience</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Optional theatre, not a substitute for quality</h2>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-6">
            <blockquote className="text-lg leading-8 text-[var(--cocoa-900)]">
              “The self-heating mechanism must enhance the experience without replacing the need for excellent taste, texture, service and safety.”
            </blockquote>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                'Activation clarity',
                'Safety reassurance',
                'Heating reliability',
                'Handling and disposal',
                'Customer participation',
                'Premium theatre',
                'Operational validation',
                'Need for technical and regulatory review',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[rgba(94,57,41,0.04)] p-4 text-sm text-[var(--muted)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <BarChart3 size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Pain points and opportunities</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Where the experience can create value</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {opportunityMatrix.map((item) => (
              <div key={item.label} className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Opportunity</div>
                <h3 className="text-lg font-semibold text-[var(--cocoa-900)]">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="blueprint" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <MapPinned size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Experience blueprint</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">What needs to work, back and front of house</h2>
            </div>
          </div>

          <p className="mb-5 max-w-3xl text-sm leading-6 text-[var(--muted)]">
            The blueprint connects each guest-facing moment to the backstage capability that protects it. Open a moment to see the owner, prevention action and suggested measure.
          </p>
          <div className="grid gap-3 lg:grid-cols-2">
            {experienceBlueprint.map((item, index) => (
              <details key={item.step} className="group rounded-2xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5 open:border-[var(--gold)] open:shadow-[var(--shadow-soft)]">
                <summary className="flex cursor-pointer list-none items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[rgba(184,137,90,0.13)] text-xs font-semibold text-[var(--cocoa-900)]">0{index + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Experience moment</span>
                    <span className="mt-1 block text-lg font-semibold text-[var(--cocoa-900)]">{item.step}</span>
                  </span>
                  <span aria-hidden="true" className="text-xl text-[var(--gold)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-5 grid gap-4 border-t border-[var(--cocoa-900)]/10 pt-4 sm:grid-cols-2">
                  {[
                    ['Customer-facing interaction', item.customerInteraction],
                    ['Visible service', item.visibleService],
                    ['Backstage capability', item.backstageCapability],
                    ['Responsible team', item.responsibleTeam],
                    ['Failure prevention', item.failurePrevention],
                    ['Measurement', item.measurement],
                  ].map(([label, detail]) => (
                    <div key={label}>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">{label}</div>
                      <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">{detail}</p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Bengaluru versus India view</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Location lens</h2>
            </div>
            <div className="flex rounded-full border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-1">
              {(['bengaluru', 'india'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={location === option}
                  onClick={() => setLocation(option)}
                  className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                    location === option ? 'bg-[var(--cocoa-900)] text-white' : 'text-[var(--muted)]'
                  }`}
                >
                  {option === 'bengaluru' ? 'Bengaluru launch' : 'India expansion'}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
            <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
              {location === 'bengaluru'
                ? 'For Bengaluru, the experience should lean into premium café culture, creative communities, social discovery and controlled encounters designed around sensory discovery and notable ambience.'
                : 'For India expansion, the model should remain premium but flexible across cities, language, local occasions and price-value interpretations. The brand should adapt without making Bengaluru the only benchmark for national behavior.'}
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {(location === 'bengaluru'
                ? [
                    ['Venue context', 'Map premium café and cultural venues as fieldwork inputs; do not infer customer demand from listings.'],
                    ['Experience pilots', 'Use pop-ups or controlled spaces to learn about service pacing, ambience and the preparation ritual.'],
                    ['Community discovery', 'Explore creative and professional communities and potential collaborations; validate fit before investment.'],
                  ]
                : [
                    ['City variation', 'Build city-by-city learning plans rather than carrying Bengaluru assumptions across India.'],
                    ['Local relevance', 'Test language, occasions and flavour directions with local customers before adapting the menu.'],
                    ['Operating model', 'Validate venue availability, service capability and experience consistency in each city.'],
                  ]
              ).map(([title, description]) => (
                <article key={title} className="rounded-2xl bg-[rgba(94,57,41,0.035)] p-4">
                  <h3 className="text-sm font-semibold text-[var(--cocoa-900)]">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{description}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-[var(--muted)]">
              Location lens is strategic direction for discovery and validation—not established market evidence.
              {location === 'bengaluru' && (
                <> <a className="font-semibold text-[var(--cocoa-900)] underline decoration-[var(--gold)] underline-offset-4" href="https://www.google.com/maps/search/premium+cafes+Bengaluru/" target="_blank" rel="noreferrer">Open a live Bengaluru venue map ↗</a></>
              )}
            </p>
          </div>
        </section>

        <section id="metrics" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <BarChart3 size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Metrics and measurement</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Recommended measures, not current data</h2>
            </div>
          </div>

          <p className="mb-5 max-w-3xl text-sm leading-6 text-[var(--muted)]">
            These are recommended measures, not current performance results. Agree definitions, data sources, privacy boundaries and baselines before setting targets.
          </p>
          <div className="space-y-3">
            {Array.from(new Set(metrics.map((metric) => metric.category))).map((category, index) => {
              const categoryMetrics = metrics.filter((metric) => metric.category === category)
              return (
                <details key={category} open={index === 0} className="group rounded-2xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5 open:border-[var(--gold)]">
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(184,137,90,0.13)] text-xs font-semibold text-[var(--cocoa-900)]">0{index + 1}</span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-[var(--cocoa-900)]">{category}</span>
                      <span className="text-xs text-[var(--muted)]">{categoryMetrics.length} recommended measures</span>
                    </span>
                    <span aria-hidden="true" className="text-xl text-[var(--gold)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-4 grid gap-3 border-t border-[var(--cocoa-900)]/10 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryMetrics.map((metric) => (
                      <div key={metric.metric} className="rounded-xl bg-[rgba(94,57,41,0.035)] p-4">
                        <h3 className="text-sm font-semibold text-[var(--cocoa-900)]">{metric.metric}</h3>
                        <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{metric.description}</p>
                        <span className="mt-3 inline-flex rounded-full bg-[rgba(184,137,90,0.13)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[var(--cocoa-900)]">{metric.evidenceStatus}</span>
                      </div>
                    ))}
                  </div>
                </details>
              )
            })}
          </div>
        </section>

        <section id="sources" className="py-8 lg:py-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cocoa-900)] text-white">
              <Download size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Sources and methodology</p>
              <h2 className="mt-1 text-3xl font-semibold text-[var(--cocoa-900)]">Primary source and research notes</h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Primary source</div>
              <h3 className="mt-2 text-xl font-semibold text-[var(--cocoa-900)]">Kathai Complete Customer Journey Map</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                The attached journey document is the primary strategy source. This website organizes its experience direction into segment, stage, touchpoint and measurement views. Validate hypotheses before treating them as observed customer evidence.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                {sources.slice(1).map((source) => (
                  <li key={source} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl bg-[rgba(94,57,41,0.04)] p-4 text-xs leading-5 text-[var(--muted)]">
                Evidence labels distinguish working hypotheses and validation needs. The persona statements are illustrative strategy devices, not research quotations. All listed metrics are recommendations, not existing results.
              </div>
            </article>
            <article className="rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Useful external starting points</div>
              <h3 className="mt-2 text-xl font-semibold text-[var(--cocoa-900)]">Plan fieldwork responsibly</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                These links support exploration and compliance research. They are contextual resources, not evidence for the audience hypotheses or market claims in this map.
              </p>
              <div className="mt-5 space-y-3">
                {contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-2xl border border-[var(--cocoa-900)]/10 bg-[rgba(94,57,41,0.025)] p-4 no-underline transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-white"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-[var(--cocoa-900)]">{link.title}</span>
                      <span aria-hidden="true" className="text-sm text-[var(--gold)] transition-transform group-hover:translate-x-1">↗</span>
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-[var(--muted)]">{link.description}</span>
                    <span className="mt-3 block break-all text-[10px] text-[var(--muted)]">{link.href}</span>
                  </a>
                ))}
              </div>
            </article>
          </div>
          <details className="group mt-4 rounded-3xl border border-[var(--cocoa-900)]/10 bg-[var(--card)] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">References cited in the primary document</span>
                <span className="mt-1 block text-lg font-semibold text-[var(--cocoa-900)]">Open the reading list ({researchReferences.length} links)</span>
              </span>
              <span aria-hidden="true" className="text-xl text-[var(--gold)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 border-t border-[var(--cocoa-900)]/10 pt-4 text-xs leading-5 text-[var(--muted)]">
              These are the references listed in the attached journey document. External market sources are directional and differ in scope and methodology; they are not proof of Kathai demand. Product, food-safety, technical-heating and legal claims require specialist review before launch.
            </p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {researchReferences.map((reference) => (
                <a
                  key={reference.reference}
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[rgba(94,57,41,0.035)] p-3 no-underline transition hover:bg-white"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--gold)]">{reference.reference} · {reference.publisher}</span>
                  <span className="mt-1 block text-sm font-medium leading-5 text-[var(--cocoa-900)]">{reference.title} ↗</span>
                </a>
              ))}
            </div>
          </details>
        </section>
      </main>
      <footer className="border-t border-[var(--cocoa-900)]/10 bg-[rgba(61,32,22,0.035)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-9 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="kathai-word nav-mark">Kathai</div>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--muted)]">
              A premium hot chocolate journey, designed around taste, ritual, comfort and human connection.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">Strategy visualization · Bengaluru launch lens · assumptions clearly flagged</p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm md:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[var(--muted)]">
              <a href="#audience" className="hover:text-[var(--cocoa-900)]">Audience</a>
              <a href="#personas" className="hover:text-[var(--cocoa-900)]">Personas</a>
              <a href="#journey-map" className="hover:text-[var(--cocoa-900)]">Journey map</a>
              <a href="#audience" onClick={() => selectAudience('gen-alpha')} className="hover:text-[var(--cocoa-900)]">Gen Alpha</a>
              <a href="#blueprint" className="hover:text-[var(--cocoa-900)]">Blueprint</a>
              <a href="#metrics" className="hover:text-[var(--cocoa-900)]">Measures</a>
              <a href="#sources" className="hover:text-[var(--cocoa-900)]">Sources</a>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={downloadJourneySummary} className="rounded-full border border-[var(--cocoa-900)]/15 bg-[var(--card)] px-4 py-2 text-xs font-semibold text-[var(--cocoa-900)] transition hover:border-[var(--gold)]">
                Download selected journey
              </button>
              <button type="button" onClick={() => window.print()} className="rounded-full bg-[var(--cocoa-900)] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90">
                Print map
              </button>
            </div>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {insight && (
          <motion.div
            className="insight-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setInsight(null)
            }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="insight-title"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="insight-dialog"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">{insight.eyebrow}</p>
                  <h2 id="insight-title" className="mt-3 text-3xl font-semibold text-[var(--cocoa-900)]">{insight.title}</h2>
                </div>
                <button
                  autoFocus
                  type="button"
                  onClick={() => setInsight(null)}
                  aria-label="Close details"
                  className="close-insight"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="mt-5 text-base leading-7 text-[var(--muted)]">{insight.body}</p>
              <div className="mt-6 space-y-3">
                {insight.details.map((detail) => (
                  <div key={detail} className="rounded-2xl border border-[var(--cocoa-900)]/10 bg-[rgba(94,57,41,0.035)] px-4 py-3 text-sm leading-6 text-[var(--muted)]">
                    {detail}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Kathai · experience journey</p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
