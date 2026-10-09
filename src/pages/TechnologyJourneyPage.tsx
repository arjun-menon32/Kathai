import { dataControls, dataEntities, experienceUseCases, intelligenceUseCases, operationalMetrics, selfHeatingWorkstream, technologyArchitecture, technologyRoadmap } from '../data/technologyJourney'
import { ResearchEvidenceReferences } from '../components/ResearchEvidenceReferences'
import { JourneyLayerGuide } from '../components/JourneyLayerGuide'
import type { AppPage } from '../data/navigation'

const technologyFindingIds = [...new Set(technologyArchitecture.flatMap((component) => component.evidence.findingIds))]

const roadmapViews = [
  { title: 'Reliable foundation', outcome: 'Trustworthy daily operations', sourcePhases: [0, 1], gate: 'Reconcile sales and stock before automating decisions.' },
  { title: 'Trusted data', outcome: 'Consistent, decision-ready reporting', sourcePhases: [2], gate: 'Validate definitions, completeness and exception handling.' },
  { title: 'Customer discovery', outcome: 'Useful, transparent product exploration', sourcePhases: [3], gate: 'Test product information and customer usefulness before scaling.' },
  { title: 'Decision intelligence', outcome: 'Evidence-led replenishment suggestions', sourcePhases: [4], gate: 'Use verified counts and supplier lead times; keep a human approver.' },
]

const experienceFlow = [
  ['Discover', 'A customer scans a product QR code or opens a product page.'],
  ['Understand', 'They review flavour, ingredients, allergens, portion and preparation information.'],
  ['Explore', 'They browse options using transparent, explainable product attributes.'],
  ['Compare', 'A rule-based match may explain why an option fits stated preferences.'],
  ['Decide', 'The customer chooses, asks staff, or leaves; feedback is optional and consent-led.'],
]

const operationsFlow = [
  ['Order capture', 'Record the order and selected product in the point-of-sale workflow.'],
  ['Preparation', 'Staff follow the documented preparation and product instructions.'],
  ['Stock adjustment', 'Record ingredient/product movements using defined units and rules.'],
  ['Exception review', 'Staff investigate voids, wastage, stock variance or incomplete records.'],
  ['Reconciliation', 'Compare sales, expected usage and physical counts; resolve variances.'],
  ['Reporting', 'Review approved, dated measures before making an operational decision.'],
]

const architectureLayers = [
  { title: 'Customer touchpoints', description: 'In-venue choice and product discovery', ids: ['touchpoints', 'experience-app'] },
  { title: 'Operating workflow', description: 'Sales and product catalogues', ids: ['commerce-pos'] },
  { title: 'Trusted information', description: 'Controlled records and reviewed reporting', ids: ['operational-data', 'analytics'] },
  { title: 'Business decisions', description: 'Human-approved operational choices', ids: ['decision-support', 'experience-improvement'] },
]

function TechnologyStatus() {
  return <span className="journey-status journey-status-proposed">Proposed — not deployed</span>
}

export function TechnologyJourneyPage({ page }: { page: AppPage }) {
  if (page === 'overview') {
    return (
      <main className="journey-dashboard technology-dashboard">
        <header className="journey-page-intro">
          <p className="journey-eyebrow">Technology Journey · System at a glance</p>
          <h1>Technology that earns trust before it automates</h1>
          <p>A proposed operating system for reliable café workflows, clear product discovery and evidence-led decisions. The capabilities below are designs, not live integrations.</p>
          <TechnologyStatus />
        </header>
        <JourneyLayerGuide />
        <section className="technology-architecture" aria-label="Proposed end-to-end architecture">
          <div className="journey-section-heading">
            <div><p className="journey-eyebrow">Understand</p><h2>One connected operating loop</h2></div>
            <p>Each layer supports the next. Verified operational data, not assumed automation, is the prerequisite for decision support.</p>
          </div>
          <div className="technology-architecture-flow">
            {architectureLayers.map((layer, index) => (
              <section className="technology-architecture-layer" key={layer.title}>
                <div className="technology-layer-heading">
                  <span className="technology-layer-index">{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{layer.title}</h3><p>{layer.description}</p></div>
                </div>
                <div className="technology-component-list">
                  {layer.ids.map((id) => {
                    const component = technologyArchitecture.find((entry) => entry.id === id)
                    return component ? <div className="technology-component" key={id}>
                      <b>{component.title}</b><p>{component.purpose}</p><TechnologyStatus />
                    </div> : null
                  })}
                </div>
                {index < architectureLayers.length - 1 && <span className="technology-flow-connector" aria-hidden="true">↓</span>}
              </section>
            ))}
          </div>
          <details className="journey-detail-panel">
            <summary>Explore architecture components, interfaces and dependencies</summary>
            <div className="journey-detail-grid">
              {technologyArchitecture.map((component) => (
                <article key={component.id}><h3>{component.title}</h3><p>{component.purpose}</p><p><b>Inputs:</b> {component.inputs.join(', ')}</p><p><b>Outputs:</b> {component.outputs.join(', ')}</p><p><b>Data exchanged:</b> {component.dataExchanged.join(', ')}</p><p><b>Interface:</b> {component.interface}</p><p><b>Dependencies:</b> {component.dependencies.join(', ') || 'No upstream dependency specified.'}</p><p><b>Owner:</b> {component.owner}</p><ul>{component.operations.map((operation) => <li key={operation}>{operation}</li>)}</ul><TechnologyStatus /></article>
              ))}
            </div>
          </details>
        </section>
        <section className="journey-decision-strip">
          <div><span className="journey-eyebrow">Decision principle</span><h2>Make the record reliable before making the recommendation.</h2></div>
          <p>Customer-facing discovery, reporting and replenishment ideas depend on a usable catalogue, defined operating controls and reconciled data. AI is not required or represented as operational.</p>
        </section>
        <section className="journey-evidence-section">
          <h2>Evidence behind the design</h2>
          <p>External context and competitor observations inform hypotheses; they are not KATHAI customer or technology validation.</p>
          <ResearchEvidenceReferences findingIds={technologyFindingIds} />
        </section>
      </main>
    )
  }

  if (page === 'experience') {
    return (
      <main className="journey-dashboard technology-dashboard">
        <header className="journey-page-intro">
          <p className="journey-eyebrow">Technology Journey · Experience &amp; Personalisation</p>
          <h1>Help people choose; keep the logic explainable</h1>
          <p>A proposed discovery flow from product information to an informed purchase decision—not an operational personalisation or AI system.</p>
          <TechnologyStatus />
        </header>
        <JourneyLayerGuide />
        <section className="journey-explore-section">
          <div className="journey-section-heading"><div><p className="journey-eyebrow">Explore · Customer flow</p><h2>QR scan → confident choice</h2></div></div>
          <ol className="journey-step-flow">
            {experienceFlow.map(([title, description], index) => <li key={title}>
              <span className="journey-step-index">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p>
            </li>)}
          </ol>
          <details className="journey-detail-panel">
            <summary>Explore use cases and the information each needs</summary>
            <div className="journey-detail-grid">
              {experienceUseCases.map((useCase) => <article key={useCase.id}>
                <h3>{useCase.title}</h3>
                <p><b>Inputs:</b> {useCase.inputs.join(', ')}</p><p><b>Rule / interaction:</b> {useCase.decisionRule.join(' ')}</p><p><b>Output:</b> {useCase.output}</p>
                <p><b>Fallback:</b> {useCase.fallback}</p><p><b>Personas in scope:</b> {useCase.personaIds.join(', ')}</p>
              </article>)}
            </div>
          </details>
        </section>
        <section className="journey-safeguard-band">
          <div><p className="journey-eyebrow">Gen Alpha safeguard</p><h2>Child explores; guardian decides and oversees</h2></div>
          <ul><li>Keep the child as consumer and influencer, not the purchaser.</li><li>Show ingredients, allergens, portion, preparation and total cost clearly for the guardian.</li><li>Do not profile children, infer sensitive traits or target them with automated recommendations.</li><li>Guardian payment and activation follow the product’s verified instructions and applicable safeguards.</li></ul>
        </section>
        <section className="journey-evidence-section"><h2>Evidence and boundaries</h2><p>Product matching is a proposed transparent rules concept. No model, customer profiling or automated targeting is currently implemented.</p><ResearchEvidenceReferences findingIds={technologyFindingIds} /></section>
      </main>
    )
  }

  if (page === 'data-intelligence') {
    return (
      <main className="journey-dashboard technology-dashboard">
        <header className="journey-page-intro"><p className="journey-eyebrow">Technology Journey · Data &amp; Intelligence</p><h1>From operational inputs to reviewed decisions</h1><p>Separate evidence already gathered from operational data KATHAI still needs to collect and validate.</p><TechnologyStatus /></header>
        <JourneyLayerGuide />
        <section className="journey-explore-section">
          <div className="journey-section-heading"><div><p className="journey-eyebrow">Explore · Proposed data flow</p><h2>Inputs → validation → processing → insight → decision</h2></div></div>
          <ol className="journey-data-flow">
            {dataControls.slice(0, 5).map((stage, index) => <li key={stage.stage}>
              <span className="journey-step-index">{String(index + 1).padStart(2, '0')}</span><p className="journey-eyebrow">{stage.stage}</p><h3>{stage.stage === 'Collect' ? 'Capture trusted inputs' : stage.stage === 'Validate' ? 'Check completeness and reconcile' : stage.stage === 'Store' ? 'Protect governed records' : stage.stage === 'Transform' ? 'Create traceable measures' : 'Present decision-ready insights'}</h3>
              <ul>{stage.controls.map((control) => <li key={control}>{control}</li>)}</ul>
            </li>)}
          </ol>
        </section>
        <section className="journey-data-inputs">
          <article><p className="journey-eyebrow">Available now</p><h2>Research and concept evidence</h2><p>Registered secondary research, competitor observations and strategic interpretation. These provide context, not live sales, inventory or KATHAI customer behaviour.</p></article>
          <article><p className="journey-eyebrow">Must be collected</p><h2>Validated operating records</h2><p>POS transactions, a maintained catalogue, stock counts and movements, supplier lead times, customer feedback with appropriate consent, and reconciled reporting.</p></article>
        </section>
        <details className="journey-detail-panel">
          <summary>Explore the proposed data entities and their lineage</summary>
          <div className="journey-detail-grid">{dataEntities.map((entity) => <article key={entity.name}><h3>{entity.name}</h3><p>{entity.purpose}</p><p><b>Minimum fields:</b> {entity.minimumFields.join(', ')}</p><p><b>Source of truth:</b> {entity.sourceOfTruth}</p><p><b>Access:</b> {entity.access}</p><p><b>Retention:</b> {entity.retention}</p></article>)}</div>
        </details>
        <details className="journey-detail-panel">
          <summary>Explore analytics use cases, assumptions and limitations</summary>
          <div className="journey-detail-grid">{intelligenceUseCases.map((useCase) => <article key={useCase.title}><h3>{useCase.title}</h3><p><b>Inputs:</b> {useCase.inputs.join(', ')}</p><p><b>Method:</b> {useCase.method}</p><p><b>Output:</b> {useCase.output}</p><p><b>Evaluation:</b> {useCase.evaluation}</p><p><b>Oversight:</b> {useCase.oversight}</p><p><b>Fallback:</b> {useCase.fallback}</p></article>)}</div>
        </details>
        <section className="journey-evidence-section"><h2>Research registry</h2><p>Only source-backed context is available today; KATHAI operating datasets are future requirements.</p><ResearchEvidenceReferences findingIds={technologyFindingIds} /></section>
      </main>
    )
  }

  if (page === 'smart-operations') {
    return (
      <main className="journey-dashboard technology-dashboard">
        <header className="journey-page-intro"><p className="journey-eyebrow">Technology Journey · Smart Operations</p><h1>Reliable operations, with people in control</h1><p>A proposed order-to-report workflow that keeps exceptions visible and reviewable instead of hiding them behind automation.</p><TechnologyStatus /></header>
        <JourneyLayerGuide />
        <section className="journey-explore-section">
          <div className="journey-section-heading"><div><p className="journey-eyebrow">Explore · Daily operating loop</p><h2>Capture → prepare → reconcile → learn</h2></div></div>
          <ol className="journey-operations-flow">{operationsFlow.map(([title, description], index) => <li key={title}><span className="journey-step-index">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
        </section>
        <section className="journey-exception-band"><div><p className="journey-eyebrow">Human review</p><h2>Exceptions stop the automated path</h2></div><ul><li>Missing, duplicate or late transaction records</li><li>Unexplained stock variance, wastage or voids</li><li>Unverified supplier lead time or unit conversion</li><li>Any recommendation based on incomplete or stale counts</li></ul><p>Staff review and resolve discrepancies; no live POS, inventory integration or automated stock adjustment is represented as deployed.</p></section>
        <details className="journey-detail-panel"><summary>Explore operating controls, measures and dependencies</summary><div className="journey-detail-grid">
          {dataControls.slice(5).map((control) => <article key={control.stage}><h3>{control.stage}</h3><ul>{control.controls.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          {operationalMetrics.map((metric) => <article key={metric.name}><h3>{metric.name}</h3><p><b>Formula:</b> {metric.formula}</p><p><b>Denominator:</b> {metric.denominator}</p><p><b>Period:</b> {metric.period}</p><p><b>Source:</b> {metric.source}</p><p><b>Decision:</b> {metric.decision}</p><p>{metric.example.resultLabel}</p></article>)}
        </div></details>
        <section className="journey-evidence-section"><h2>Evidence informing the operating design</h2><ResearchEvidenceReferences findingIds={technologyFindingIds} /></section>
      </main>
    )
  }

  return (
    <main className="journey-dashboard technology-dashboard">
      <header className="journey-page-intro"><p className="journey-eyebrow">Technology Journey · Roadmap</p><h1>Earn each capability in four gated phases</h1><p>Sequence the work from dependable operations to decision support. Each gate requires evidence before the next capability is treated as ready.</p><TechnologyStatus /></header>
      <JourneyLayerGuide />
      <section className="journey-roadmap-section">
        <div className="journey-section-heading"><div><p className="journey-eyebrow">Explore · Delivery sequence</p><h2>Four phases, one readiness path</h2></div><p>Governance and reconciliation are prerequisites in the reliable foundation phase—not a separate claim of technology readiness.</p></div>
        <ol className="technology-roadmap">
          {roadmapViews.map((view, index) => {
            const sourceStages = view.sourcePhases.map((phaseIndex) => technologyRoadmap[phaseIndex]).filter(Boolean)
            return <li key={view.title} className="technology-roadmap-phase">
              <div className="technology-roadmap-top"><span className="journey-step-index">0{index + 1}</span><span className="journey-status journey-status-gated">Proposed gate</span></div>
              <p className="journey-eyebrow">Phase {index + 1}</p><h3>{view.title}</h3><p className="technology-roadmap-outcome">{view.outcome}</p>
              <p><b>Readiness gate:</b> {view.gate}</p>
              <details className="journey-detail-panel">
                <summary>Deliverables, dependencies, criteria, risks and costs</summary>
                {sourceStages.map((stage) => <div className="journey-roadmap-detail" key={stage.title}>
                  <h4>{stage.title}</h4><p><b>Deliverables:</b> {stage.deliverables.join('; ')}</p><p><b>Inputs:</b> {stage.inputs.join('; ')}</p>
                  <p><b>Dependencies:</b> {stage.dependencies.join('; ') || 'None specified'}</p><p><b>Responsible role:</b> {stage.responsibleRole}</p>
                  <p><b>Acceptance criteria:</b> {stage.acceptance.join('; ')}</p><p><b>Risks and controls:</b> {stage.risksAndControls.join('; ')}</p><p><b>Cost categories:</b> {stage.costCategories.join('; ')}</p>
                </div>)}
              </details>
            </li>
          })}
        </ol>
      </section>
      <section className="journey-self-heating-section">
        <div><p className="journey-eyebrow">Separate gated workstream</p><h2>Self-heating product feasibility</h2><p>No heating mechanism, certification, safety case or product readiness has been established. Progress depends on engineering evidence and applicable review.</p></div>
        <details className="journey-detail-panel"><summary>Explore feasibility gates and required evidence</summary><ol className="journey-self-heating-gates">{selfHeatingWorkstream.map((gate) => <li key={gate.stage}><h3>{gate.stage}</h3><p>{gate.detail}</p><p><b>Evidence / exit criterion:</b> {gate.gate}</p></li>)}</ol></details>
      </section>
      <section className="journey-evidence-section"><h2>Roadmap evidence</h2><p>Phases describe a proposed sequence, not funded, scheduled or completed delivery commitments.</p><ResearchEvidenceReferences findingIds={technologyFindingIds} /></section>
    </main>
  )
}

export default TechnologyJourneyPage
