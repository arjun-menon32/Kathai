import { useState } from 'react'
import type { ReactNode } from 'react'
import { PageHeading } from '../components/PageHeading'
import { ResearchEvidenceReferences } from '../components/ResearchEvidenceReferences'
import { JourneyLayerGuide } from '../components/JourneyLayerGuide'
import { channelDecisionPaths, calculateFinancialMetrics, calculateMarketSizing, competitorBenchmarks, emptyMarketScenario, financialModelDefinitions, financialModelLimitations, financialScenarioErrors, goToMarketExperiments, initialFinancialScenarios, investorKpis, investmentCaseEvidence, marketContext, marketSizingCaveat, marketSizingMethod, revenueStreams, validationPlan, type FinancialScenario, type MarketScenarioInputs } from '../data/investorJourney'
import { personas, segments } from '../data/audiences'
import { hrefForPage, type AppPage } from '../data/navigation'
import type { ResearchFindingId } from '../data/types'

const investorPages: { id: AppPage; label: string; question: string }[] = [
  { id: 'investment-overview', label: 'Investment Overview', question: 'What are we investing in?' },
  { id: 'market-opportunity', label: 'Market Opportunity', question: 'Is there an opportunity?' },
  { id: 'business-model', label: 'Business Model', question: 'How could it make money?' },
  { id: 'validation-traction', label: 'Validation Plan', question: 'What must we prove?' },
  { id: 'growth-scale', label: 'Growth & Scale', question: 'How could it grow?' },
  { id: 'investment-case', label: 'Investment Case', question: 'Why could this be investable?' },
]

const pageHeadings: Partial<Record<AppPage, { title: string; description: string }>> = {
  'investment-overview': {
    title: 'A premium hot chocolate concept that must earn its next step.',
    description: 'A staged investment narrative: differentiated experience as a hypothesis, evidence gates before scale, and no implied traction or funding commitment.',
  },
  'market-opportunity': {
    title: 'Separate sector context from the market KATHAI can serve.',
    description: 'Current published figures are broad food-services context. Build a traceable bottom-up market model from category occasions, geography and observed capacity.',
  },
  'business-model': {
    title: 'Make the economics editable, visible and falsifiable.',
    description: 'Illustrative scenarios expose every price, mix and cost assumption. Replace them with sourced quotes and observed transactions before making decisions.',
  },
  'validation-traction': {
    title: 'Traction is a question until behavior is measured.',
    description: 'The current evidence supports research questions and benchmarks, not customer validation, sales traction or operational performance.',
  },
  'growth-scale': {
    title: 'Compare growth paths only after the first model works.',
    description: 'Owned locations, retail, delivery and partnerships have different dependencies and economics; each path has an explicit decision gate.',
  },
  'investment-case': {
    title: 'Link every investment claim to proof still required.',
    description: 'A decision framework, not a funding ask: the case remains conditional on product, customer, operating and financial evidence.',
  },
}

function Progression({ page }: { page: AppPage }) {
  const currentIndex = Math.max(0, investorPages.findIndex((item) => item.id === page))
  const current = investorPages[currentIndex]
  const previous = currentIndex > 0 ? investorPages[currentIndex - 1] : undefined
  const next = currentIndex < investorPages.length - 1 ? investorPages[currentIndex + 1] : undefined

  return (
    <nav className="investor-progression" aria-label="Investor journey progression">
      {previous
        ? <a href={hrefForPage('investor', previous.id)}><span>Previous</span><strong>{previous.label}</strong></a>
        : <span className="investor-progression-placeholder" aria-hidden="true" />}
      <div><span>{String(currentIndex + 1).padStart(2, '0')} / 06 — {current.question}</span><strong>{current.label}</strong></div>
      {next
        ? <a href={hrefForPage('investor', next.id)}><span>Next</span><strong>{next.label} <span aria-hidden="true">→</span></strong></a>
        : <a className="investor-progression-return" href={hrefForPage('investor', 'investment-overview')}><span>Return to beginning</span><strong>Back to Investment Overview <span aria-hidden="true">↶</span></strong></a>}
    </nav>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading-row"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div></div>
}

function Evidence({ findingIds }: { findingIds: ResearchFindingId[] }) {
  return <ResearchEvidenceReferences findingIds={findingIds} />
}

function InvestmentOverview() {
  const story = [
    { step: 'Proposition', title: 'An artisan hot chocolate experience', detail: 'A prepared beverage grounded in craft, flavour discovery and an intentional ritual; product quality and customer pull remain unproven.' },
    { step: 'Why it might matter', title: 'A choice beyond the drink alone', detail: 'Flavour, service, storytelling and setting may distinguish the offer. Compare it with other drinks, desserts, café visits and home preparation.' },
    { step: 'Current stage', title: 'Research planning—not traction', detail: 'Available competitor and published research informs questions; none establishes KATHAI demand, sales or repeat behavior.' },
  ]

  return <>
    <div className="journey-evidence-banner"><strong>Current stage · proposition and research planning</strong><span>No launch, revenue, customer traction, commercial agreements, funding request, valuation or return claim is stated here.</span></div>
    <section className="journey-section">
      <SectionHeading eyebrow="A · Investment narrative" title="What an investor should understand first" />
      <ol className="investor-storyline">{story.map((item) => <li key={item.step}><span>{item.step}</span><h2>{item.title}</h2><p>{item.detail}</p></li>)}</ol>
      <div className="investor-next-proof"><span className="journey-eyebrow">Next decision gate</span><strong>Prove desirability, willingness to pay, repeat behavior and contribution with observed evidence.</strong><span>No funding amount, valuation, round terms, runway, traction, signed partnership, committed team or return is recorded.</span></div>
    </section>
    <section className="journey-section">
      <SectionHeading eyebrow="A · Intended customer lenses" title="Use the existing Customer Journey as the customer source of truth" description="These are strategic profiles for research planning, not counted or validated addressable customers." />
      <div className="investor-target-segments">{segments.map((segment) => {
        const profiles = personas.filter((persona) => persona.segment === segment.id)
        return <article key={segment.id}><span>{segment.label} · {profiles.length} illustrative profiles</span><h3>{segment.tagline}</h3><p>{segment.detail}</p><details><summary>View profiles</summary><ul>{profiles.map((persona) => <li key={persona.id}>{persona.name}</li>)}</ul></details><a href={hrefForPage('customer', 'audiences')}>Review the Customer Journey profiles</a></article>
      })}</div>
    </section>
    <section className="journey-section investor-cross-journey">
      <SectionHeading eyebrow="How the journeys connect" title="Evidence must flow across the case" description="These are decision dependencies, not automated data integrations. The current financial model does not read live customer or technology data." />
      <div className="investor-cross-journey-grid">
        <article><span>01 · CUSTOMER EVIDENCE</span><h3>Customer Journey</h3><p>Profiles frame who and what to test. Observed choices, paid orders, repeat behavior and alternatives considered are still required.</p><a href={hrefForPage('customer', 'audiences')}>Explore customer profiles</a></article>
        <article><span>02 · OPERATING READINESS</span><h3>Technology Journey</h3><p>POS, catalogue, inventory controls and reconciled data are prerequisites for dependable service measures and cost inputs. All remain proposed capabilities.</p><a href={hrefForPage('technology', 'overview')}>Explore technology architecture</a></article>
        <article><span>03 · INVESTMENT MODEL</span><h3>Investor Journey</h3><p>Replace illustrative prices, volumes and costs only when customer tests, supplier evidence and operating records substantiate them.</p><a href={hrefForPage('investor', 'business-model')}>Review editable scenarios</a></article>
      </div>
    </section>
    <section className="journey-section">
      <SectionHeading eyebrow="B · Differentiation thesis" title="A testable proposition, not a moat claim" />
      <div className="investor-thesis-grid">{[
        ['Product', 'Craft cacao, preparation, texture and flavour quality must be consistent and independently assessed.'],
        ['Experience', 'Discovery and ritual may add value; test against a simpler drink, another dessert, café visit or home preparation.'],
        ['Trust', 'Ingredient, allergen, provenance and price information must be transparent and evidenced.'],
        ['Learning', 'Technology can support clear catalogue information and disciplined operations; it is a means, not a validated differentiator by itself.'],
      ].map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div>
      <Evidence findingIds={['ajji-cacao-tasting', 'ajji-heritage-setting', 'market-subko-position', 'market-indian-cacao']} />
    </section>
    <section className="journey-section">
      <SectionHeading eyebrow="C · Evidence boundary" title="What is absent from the current investment record" />
      <ul className="investor-missing-evidence">{[
        'No KATHAI customer interviews, concept tests, paid transactions or repeat cohorts are recorded as completed.',
        'No product specification, recipe cost, supplier quotation, margin, store/site economics or operating results are recorded.',
        'No category-specific TAM/SAM/SOM, validated Bengaluru catchment, customer acquisition cost or retention rate is recorded.',
        'No signed partnerships, retailer terms, permits, certifications, committed team, cap table, funding amount or use-of-funds budget is recorded.',
      ].map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  </>
}

const marketScenarioNames = ['Conservative', 'Base', 'Upside'] as const
type MarketScenarioName = typeof marketScenarioNames[number]
type MarketScenarioCollection = Record<MarketScenarioName, MarketScenarioInputs>

const marketInputFields: { key: Exclude<keyof MarketScenarioInputs, 'sourceRegister' | 'geography' | 'referenceDate' | 'method'>; label: string; unit: string; support: string }[] = [
  { key: 'relevantAnnualOccasions', label: 'Relevant annual category occasions', unit: 'occasions / year', support: 'Source a defined target population, geography and frequency; avoid unsupported national population multiplication.' },
  { key: 'serviceableAnnualOccasions', label: 'Serviceable annual occasions', unit: 'occasions / year', support: 'Derive from reachable catchments/channels and observed category behavior.' },
  { key: 'averageSpendPerOccasion', label: 'Average spend per occasion', unit: '₹ / occasion', support: 'Use observed realized spend; specify whether tax, add-ons and discounts are included.' },
  { key: 'achievableAnnualOrders', label: 'Capacity-constrained obtainable orders', unit: 'orders / year', support: 'Tie to documented service capacity, opening days, observed conversion/utilization and supply.' },
  { key: 'obtainableNetPrice', label: 'Obtainable net price', unit: '₹ / order', support: 'Use realized price after discount/refund with a stated tax treatment.' },
]

function MarketOpportunity() {
  const [inputs, setInputs] = useState<MarketScenarioCollection>({
    Conservative: emptyMarketScenario(),
    Base: emptyMarketScenario(),
    Upside: emptyMarketScenario(),
  })

  const updateInput = (scenario: MarketScenarioName, key: Exclude<keyof MarketScenarioInputs, 'sourceRegister' | 'geography' | 'referenceDate' | 'method'>, value: number | null) => {
    setInputs((current) => ({ ...current, [scenario]: { ...current[scenario], [key]: value } }))
  }
  const updateMetadata = (scenario: MarketScenarioName, key: 'sourceRegister' | 'geography' | 'referenceDate' | 'method', value: string) => {
    setInputs((current) => ({ ...current, [scenario]: { ...current[scenario], [key]: value } }))
  }

  return <>
    <div className="journey-evidence-banner"><strong>Broad sector context ≠ KATHAI market size</strong><span>Published food-services turnover is not a hot-chocolate TAM, serviceable market, demand estimate or consumer preference finding.</span></div>
    {marketContext.map((context) => <section className="journey-section investor-market-context" key={context.title}>
      <SectionHeading eyebrow="A · Published market context" title={context.title} description={context.publishedContext} />
      <ul>{context.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
      <Evidence findingIds={context.findingIds} />
    </section>)}
    <section className="journey-section">
      <SectionHeading eyebrow="B · Competitive benchmarks" title="Observed offers to compare—not consumer preference" description="Competitor prices are time-sensitive; verify the dated source, current serving and tax basis before quoting externally." />
      <div className="investor-benchmark-grid">{competitorBenchmarks.map((competitor) => <article key={competitor.name}><h3>{competitor.name}</h3><p><b>Observed:</b> {competitor.observedOffer}</p><p><b>Relevance:</b> {competitor.relevance}</p><p><b>Limit:</b> {competitor.limitation}</p><Evidence findingIds={competitor.findingIds} /></article>)}</div>
    </section>
    <section className="journey-section">
      <SectionHeading eyebrow="C · Bottom-up market model" title="Size only what can be sourced" description="Broad food-services context is not KATHAI’s addressable market. Build a bottom-up view from category occasions, reachable geography and observed capacity." />
      <p className="journey-evidence-note">{marketSizingCaveat}</p>
      <ol className="investor-market-sizing-flow">{marketSizingMethod.map((method, index) => <li key={method.label}><span>0{index + 1}</span><b>{method.label}</b><p>{method.formula}</p></li>)}</ol>
      <p className="investor-model-errors" role="status">No market-size result is currently supported. Inputs begin blank; outputs stay withheld until provenance fields are recorded.</p>
      <details className="investor-market-editor">
        <summary>Open the market scenario editor · Conservative / Base / Upside</summary>
        <div className="investor-market-scenarios">{marketScenarioNames.map((name) => {
        const result = calculateMarketSizing(inputs[name])
        return <article key={name}><h3>{name} · sourced input set</h3><p className="investor-assumption-label">User-entered inputs · no default estimates</p>
          <div className="investor-market-inputs">{marketInputFields.map((field) => <label key={field.key}>{field.label}<span>{field.unit}</span><input type="number" min="0" step="any" value={inputs[name][field.key] ?? ''} onChange={(event) => updateInput(name, field.key, event.currentTarget.value === '' ? null : event.currentTarget.valueAsNumber)} /><small>{field.support}</small></label>)}</div>
          <fieldset className="investor-market-provenance"><legend>Required source record · applies to inputs in this scenario</legend>
            <label>Source register <span>Source title, URL or document path/page, and which input(s) it supports</span><textarea required value={inputs[name].sourceRegister} onChange={(event) => updateMetadata(name, 'sourceRegister', event.currentTarget.value)} /></label>
            <label>Geography <span>Population and geographic boundary represented</span><input required value={inputs[name].geography} onChange={(event) => updateMetadata(name, 'geography', event.currentTarget.value)} /></label>
            <label>Reference date <span>Data collection/publication date or measurement period</span><input required value={inputs[name].referenceDate} onChange={(event) => updateMetadata(name, 'referenceDate', event.currentTarget.value)} /></label>
            <label>Method and limitations <span>Calculation, sample/coverage, uncertainty and caveats</span><textarea required value={inputs[name].method} onChange={(event) => updateMetadata(name, 'method', event.currentTarget.value)} /></label>
          </fieldset>
          {!inputs[name].sourceRegister.trim() || !inputs[name].geography.trim() || !inputs[name].referenceDate.trim() || !inputs[name].method.trim()
            ? <p className="investor-model-errors" role="status">Market outputs remain withheld until the scenario source, geography, reference date and method/limitations are recorded.</p>
            : null}
          <dl className="investor-market-results"><dt>TAM · annual occasions × average spend</dt><dd>{result.tam === null ? 'Not calculated' : formatMoney(result.tam)}</dd><dt>SAM · serviceable occasions × average spend</dt><dd>{result.sam === null ? 'Not calculated' : formatMoney(result.sam)}</dd><dt>SOM · obtainable orders × net price</dt><dd>{result.som === null ? 'Not calculated' : formatMoney(result.som)}</dd></dl>
        </article>
      })}</div>
        <div className="journey-method-note"><strong>Method requirements</strong><ol>{marketSizingMethod.map((method) => <li key={method.label}><h3>{method.label}</h3><p><b>Required inputs:</b> {method.inputs.join(' · ')}</p></li>)}</ol></div>
      </details>
    </section>
  </>
}

const financialInputFields: { key: keyof FinancialScenario['inputs']; label: string; unit: string; group: string; maximum?: number }[] = [
  { key: 'cupPrice', label: 'In-venue cup selling price', unit: '₹ / order', group: 'Price and mix' },
  { key: 'packagedPrice', label: 'Illustrative packaged format price', unit: '₹ / order', group: 'Price and mix' },
  { key: 'cupMixPercent', label: 'In-venue cup mix', unit: '%', group: 'Price and mix', maximum: 100 },
  { key: 'packagedMixPercent', label: 'Packaged-format mix', unit: '%', group: 'Price and mix', maximum: 100 },
  { key: 'ordersPerOpenDay', label: 'Orders per open day', unit: 'orders / day', group: 'Volume and unit costs' },
  { key: 'openDaysPerMonth', label: 'Open days per month', unit: 'days / month', group: 'Volume and unit costs' },
  { key: 'cupIngredientCost', label: 'Cup ingredient cost', unit: '₹ / order', group: 'Volume and unit costs' },
  { key: 'packagedIngredientCost', label: 'Packaged-format ingredient cost', unit: '₹ / order', group: 'Volume and unit costs' },
  { key: 'cupPackagingCost', label: 'Cup packaging cost', unit: '₹ / order', group: 'Volume and unit costs' },
  { key: 'packagedPackagingCost', label: 'Packaged-format packaging cost', unit: '₹ / order', group: 'Volume and unit costs' },
  { key: 'wastePercentOfIngredients', label: 'Waste allowance on ingredients', unit: '%', group: 'Fees and waste', maximum: 100 },
  { key: 'paymentFeePercent', label: 'Payment processing fee', unit: '% of revenue', group: 'Fees and waste', maximum: 100 },
  { key: 'onlineOrderSharePercent', label: 'Online/delivery order share', unit: '% of revenue', group: 'Fees and waste', maximum: 100 },
  { key: 'channelFeePercent', label: 'Online/channel fee', unit: '% of online revenue', group: 'Fees and waste', maximum: 100 },
  { key: 'monthlyLabour', label: 'Monthly labour', unit: '₹ / month', group: 'Monthly operating costs' },
  { key: 'monthlyRent', label: 'Monthly rent', unit: '₹ / month', group: 'Monthly operating costs' },
  { key: 'monthlyUtilities', label: 'Monthly utilities', unit: '₹ / month', group: 'Monthly operating costs' },
  { key: 'monthlyMarketing', label: 'Monthly marketing', unit: '₹ / month', group: 'Monthly operating costs' },
  { key: 'equipmentCapex', label: 'Equipment investment', unit: '₹ one-time planning input', group: 'Equipment depreciation' },
  { key: 'equipmentLifeMonths', label: 'Equipment useful life', unit: 'months', group: 'Equipment depreciation' },
]

const financialMetricRows: { label: string; metric: keyof NonNullable<ReturnType<typeof calculateFinancialMetrics>>; unit: 'money' | 'percent' | 'number' }[] = [
  { label: 'Weighted average order value', metric: 'weightedAverageOrderValue', unit: 'money' },
  { label: 'Orders per month', metric: 'monthlyOrders', unit: 'number' },
  { label: 'Revenue per month', metric: 'monthlyRevenue', unit: 'money' },
  { label: 'Annualized revenue · monthly run-rate × 12', metric: 'annualizedRevenue', unit: 'money' },
  { label: 'Ingredient cost', metric: 'monthlyIngredientCost', unit: 'money' },
  { label: 'Packaging cost', metric: 'monthlyPackagingCost', unit: 'money' },
  { label: 'Waste allowance', metric: 'monthlyWasteAllowance', unit: 'money' },
  { label: 'Cost of goods', metric: 'monthlyCostOfGoods', unit: 'money' },
  { label: 'Gross profit', metric: 'monthlyGrossProfit', unit: 'money' },
  { label: 'Gross margin', metric: 'grossMarginPercent', unit: 'percent' },
  { label: 'Payment fees', metric: 'monthlyPaymentFees', unit: 'money' },
  { label: 'Channel fees', metric: 'monthlyChannelFees', unit: 'money' },
  { label: 'Contribution', metric: 'monthlyContribution', unit: 'money' },
  { label: 'Contribution margin', metric: 'contributionMarginPercent', unit: 'percent' },
  { label: 'Labour / rent / utilities / marketing / depreciation', metric: 'monthlyOperatingCosts', unit: 'money' },
  { label: 'Operating profit before tax and financing', metric: 'monthlyOperatingProfitBeforeTaxAndFinancing', unit: 'money' },
  { label: 'Break-even orders per open day', metric: 'breakEvenOrdersPerOpenDay', unit: 'number' },
]

function formatMoney(value: number | null) {
  return value === null || !Number.isFinite(value)
    ? 'Not calculated'
    : new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
}

function formatMetric(value: number | null, unit: 'money' | 'percent' | 'number') {
  if (value === null || !Number.isFinite(value)) return 'Not calculated'
  if (unit === 'money') return formatMoney(value)
  if (unit === 'percent') return `${value.toFixed(1)}%`
  return `${value.toFixed(1)}`
}

function updateScenario(scenarios: FinancialScenario[], scenarioIndex: number, inputKey: keyof FinancialScenario['inputs'], value: number): FinancialScenario[] {
  return scenarios.map((scenario, index) => index === scenarioIndex
    ? { ...scenario, inputs: { ...scenario.inputs, [inputKey]: value } }
    : scenario)
}

function FinancialModel() {
  const [scenarios, setScenarios] = useState(initialFinancialScenarios)
  const metrics = scenarios.map((scenario) => calculateFinancialMetrics(scenario))
  const headlineMetrics = new Set<keyof NonNullable<ReturnType<typeof calculateFinancialMetrics>>>([
    'monthlyRevenue',
    'monthlyCostOfGoods',
    'monthlyContribution',
    'monthlyOperatingCosts',
    'monthlyOperatingProfitBeforeTaxAndFinancing',
    'breakEvenOrdersPerOpenDay',
  ])

  return <>
    <div className="journey-evidence-banner"><strong>Editable planning model · not a forecast</strong><span>All three starting scenarios are invented planning assumptions, not sourced quotes, observed sales, a validated price, a budget or a commitment. Edit inputs and replace them with documented evidence.</span></div>
    <section className="journey-section">
      <SectionHeading eyebrow="A · Scenario outputs" title="Monthly economics by editable scenario" description="Outputs are arithmetic consequences of the visible assumptions. They do not establish commercial viability or expected performance." />
      <div className="investor-scenario-cards">{scenarios.map((scenario, index) => {
        const result = metrics[index]
        const errors = financialScenarioErrors(scenario)
        return <article key={scenario.key}><h3>{scenario.label}</h3><p className="investor-assumption-label">Illustrative modelling assumptions · editable</p>
          {errors.length > 0 && <ul className="investor-model-errors" role="alert">{errors.map((error) => <li key={error}>{error}</li>)}</ul>}
          <dl className="investor-scenario-headline">{financialMetricRows.filter((row) => headlineMetrics.has(row.metric)).map((row) => <div key={row.metric}><dt>{row.label}</dt><dd>{formatMetric(result ? result[row.metric] : null, row.unit)}</dd></div>)}</dl>
          <details className="investor-scenario-details"><summary>Full model outputs</summary><dl>{financialMetricRows.filter((row) => !headlineMetrics.has(row.metric)).map((row) => <div key={row.metric}><dt>{row.label}</dt><dd>{formatMetric(result ? result[row.metric] : null, row.unit)}</dd></div>)}</dl></details>
        </article>
      })}</div>
    </section>
    <section className="journey-section">
      <SectionHeading eyebrow="B · Transparent inputs" title="Edit every starting assumption" description="Packaged format is a placeholder, not a confirmed SKU. The self-heating concept is excluded. Product mix must total exactly 100%." />
      <details className="investor-input-editor">
        <summary>Open the editable assumption set · values are illustrative, not forecasts</summary>
        <div className="investor-scenario-editors">{scenarios.map((scenario, scenarioIndex) => <details key={scenario.key}>
          <summary>{scenario.label} scenario assumptions</summary>
          <div className="investor-scenario-inputs">{[...new Set(financialInputFields.map((field) => field.group))].map((group) => <fieldset key={group}>
            <legend>{group}</legend>
            <div className="investor-input-grid">{financialInputFields.filter((field) => field.group === group).map((field) => <label key={field.key}>
              {field.label}<span>{field.unit}</span>
              <input type="number" min="0" max={field.maximum} step="any" value={Number.isFinite(scenario.inputs[field.key]) ? scenario.inputs[field.key] : ''} onChange={(event) => {
                const value = event.currentTarget.value === '' ? Number.NaN : event.currentTarget.valueAsNumber
                setScenarios((current) => updateScenario(current, scenarioIndex, field.key, value))
              }} />
            </label>)}</div>
          </fieldset>)}</div>
        </details>)}</div>
        <p className="journey-evidence-note">The in-venue cup price defaults of ₹450 / ₹525 / ₹600 carry forward the Customer Journey’s unvalidated planning frame. Every other starting value is a modelling assumption. None is an actual quote or operating result.</p>
      </details>
    </section>
    <section className="journey-section">
      <SectionHeading eyebrow="C · Calculation method" title="Formulas and what they leave out" />
      <details className="investor-methodology"><summary>Verify formulas, definitions and model limitations</summary>
        <div className="investor-formula-list">{financialModelDefinitions.map(([label, formula]) => <article key={label}><h3>{label}</h3><p>{formula}</p></article>)}</div>
        <h3>Limitations and excluded costs</h3><ul>{financialModelLimitations.map((item) => <li key={item}>{item}</li>)}</ul>
      </details>
    </section>
  </>
}

function BusinessModel() {
  return <>
    <section className="journey-section">
      <SectionHeading eyebrow="A · Potential revenue architecture" title="Separate the core from options" description="Potential streams are not committed and should not be counted as revenue until the relevant offer and economics are verified." />
      <div className="investor-revenue-groups">{revenueStreams.map((stream, index) => <article className={`investor-revenue-group maturity-${Math.min(index + 1, 4)}`} key={stream.stream}><span>0{index + 1} · {stream.status}</span><h3>{stream.stream}</h3><p>{stream.evidence}</p></article>)}</div>
    </section>
    <FinancialModel />
    <section className="journey-section">
      <SectionHeading eyebrow="D · Investor KPIs" title="Measures required before a commercial decision" description="No historical KATHAI KPI values are recorded. These formulas become usable only after their definitions, data quality and observation windows are agreed." />
      <div className="investor-kpi-grid">{investorKpis.map((item) => <article key={item.name}><h3>{item.name}</h3><p><b>Formula:</b> {item.formula}</p><p><b>Decision use:</b> {item.decision}</p><span>No current value recorded</span></article>)}</div>
    </section>
  </>
}

function ValidationTraction() {
  return <>
    <div className="investor-validation-note"><strong>Current traction status: not established</strong><span>The research registry contains competitor observations, desk research and external studies; it contains no completed KATHAI customer validation, paid transaction series or repeat cohort.</span></div>
    <section className="journey-section"><SectionHeading eyebrow="A · Evidence gates" title="Tests, measurable evidence and stop/go decisions" description="The test proposals below are future work. No gate is reported as passed." />
      <ol className="investor-validation-pipeline">{validationPlan.map((item, index) => <li key={item.gate}><article>
        <span className="investor-validation-number">0{index + 1} · PLANNED</span><span className="journey-status journey-status-gated">Not yet tested</span>
        <h2>{item.gate}</h2><p><b>Decision question:</b> {item.question}</p><p><b>Proposed test:</b> {item.test}</p>
        <details><summary>Evidence required, weak-result response and sources</summary><p><b>Evidence required:</b> {item.passEvidence}</p><p><b>If evidence is weak:</b> {item.failureAction}</p><Evidence findingIds={item.findingIds} /></details>
      </article></li>)}</ol>
    </section>
    <section className="journey-section">
      <SectionHeading eyebrow="B · Evidence quality" title="What counts as customer evidence" />
      <div className="investor-thesis-grid">{[
        ['Observed purchase', 'A defined offer, eligible audience, exposure count, completed orders, price, refunds and comparison group where feasible.'],
        ['Repeat behavior', 'A defined adult-consented cohort and observation window, plus anonymous aggregate sales; stated intent is not a repeat purchase.'],
        ['Unit economics', 'Reconciled realized prices, recipes, supplier invoices, packaging, fees, waste, payroll, rent and channel costs.'],
        ['Qualitative research', 'Recruitment, context, protocol, sample, dissenting views and limitations; anecdotes remain illustrative rather than representative.'],
      ].map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </section>
  </>
}

function GrowthScale() {
  return <>
    <div className="journey-evidence-banner"><strong>Growth paths are alternatives to evaluate</strong><span>No location expansion, retail distribution, digital channel, partnership or international activity is represented as committed.</span></div>
    <section className="journey-section"><SectionHeading eyebrow="A · Go-to-market experiments" title="Test discovery channels with actual purchase behavior" description="The experiments are proposed; none is reported as funded, launched or proven." />
      <details className="investor-channel-experiments"><summary>Explore proposed discovery experiments and source context</summary>
        <div className="investor-channel-grid">{goToMarketExperiments.map((item) => <article key={item.channel}><h2>{item.channel}</h2><p><b>Hypothesis:</b> {item.hypothesis}</p><p><b>Test:</b> {item.test}</p><p><b>Gate:</b> {item.gate}</p><Evidence findingIds={item.findingIds} /></article>)}</div>
      </details>
    </section>
    <section className="journey-section"><SectionHeading eyebrow="A · Route comparisons" title="Dependencies and unit-level tests differ by channel" />
      <div className="investor-growth-paths">{channelDecisionPaths.map((path, index) => <article key={path.name}>
        <span className="investor-validation-number">0{index + 1} · UNPROVEN</span><h2>{path.name}</h2><p><b>Customer opportunity:</b> {path.fit}</p><p className="investor-gate"><b>Decision gate:</b> {path.gate}</p>
        <details><summary>Operating dependencies and unit economics to measure</summary><h3>Operating dependencies</h3><ul>{path.dependencies.map((item) => <li key={item}>{item}</li>)}</ul><h3>Unit economics to measure</h3><ul>{path.economicsToMeasure.map((item) => <li key={item}>{item}</li>)}</ul></details>
      </article>)}</div>
    </section>
    <section className="journey-section"><SectionHeading eyebrow="B · Expansion discipline" title="Only scale repeatable evidence" />
      <ol className="investor-scale-gates">{['Demand and actual purchase', 'Repeat behavior and occasion frequency', 'Positive contribution using sourced costs', 'Quality, supply and operating repeatability', 'Channel-specific acquisition and delivery economics', 'Management capacity, permissions and capital plan'].map((gate, index) => <li key={gate}><span>0{index + 1}</span><strong>{gate}</strong></li>)}</ol>
    </section>
  </>
}

function InvestmentCase() {
  return <>
    <div className="journey-evidence-banner"><strong>Investment case status · conditional and incomplete</strong><span>This framework records testable claims, current evidence boundaries and proof requirements. It is not an offer, funding request, valuation or recommendation to invest.</span></div>
    <section className="journey-section"><SectionHeading eyebrow="A · Thesis-to-proof map" title="What would need to be true" description="Each insight points to evidence still needed; the cited sources provide context, not KATHAI customer validation." />
      <div className="investor-case-map">{investmentCaseEvidence.map((item, index) => <article key={item.claim}><span>0{index + 1}</span><div><h2>{item.claim}</h2><p><b>Missing evidence / next action:</b> {item.proofNeeded}</p><p className="investor-available-context"><b>Available context:</b> Source-linked research summary below; this is not KATHAI validation.</p><Evidence findingIds={item.findingIds} /></div></article>)}</div>
    </section>
    <section className="journey-section"><SectionHeading eyebrow="B · Immediate milestones" title="Evidence to produce next" description="Sequence is proposed and undated; no funding, owner or delivery commitment is implied." />
      <ol className="investor-immediate-milestones">{[
        'Approve a product and ingredient specification with verified allergen and preparation information.',
        'Run a bounded customer and price/portion test with observed choice, purchase denominator and contrary evidence.',
        'Collect supplier quotes and a reconciled pilot cost record; replace the illustrative unit-cost assumptions.',
        'Review operational readiness, permissions and the separate self-heating feasibility gates before any product claim or scale decision.',
      ].map((milestone, index) => <li key={milestone}><span>0{index + 1}</span><p>{milestone}</p></li>)}</ol>
    </section>
    <section className="journey-section"><SectionHeading eyebrow="B · Investor decision checklist" title="Information required before an investment decision" />
      <div className="investor-decision-checklist">{[
        ['Market', 'Bottom-up TAM/SAM/SOM with sourced occasions, geography, frequency and price; competitor snapshot with dates.'],
        ['Product', 'Final recipes/specifications, sensory differentiation, supplier traceability, allergen controls and production repeatability.'],
        ['Customers', 'Recruitment, concept/price tests, actual transactions, repeat cohorts and adverse/contrary evidence.'],
        ['Commercial model', 'Real channel/customer mix, net realized pricing, contribution by SKU/channel and verified fixed costs.'],
        ['Execution', 'Named accountable team, operating location/status, supplier capacity, permits and risk register.'],
        ['Funding', 'Amount, use-of-funds budget, runway, milestones, financing terms, cap table and dilution—currently unavailable.'],
        ['Risk', 'Product, food-contact/heating, regulatory, privacy, supply, seasonality, competition, execution and cash risks with owners and controls.'],
      ].map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p><span>Not established in current application</span></article>)}</div>
    </section>
    <section className="journey-section"><SectionHeading eyebrow="C · Current stance" title="Learn, measure, then commit" />
      <p className="investor-final-position">The defensible near-term case is to investigate an artisan hot chocolate proposition through bounded customer, product, operating and price tests. An attractive market, repeatable unit, self-heating product, scale path and return remain hypotheses until evidence is produced.</p>
    </section>
  </>
}

function InvestorJourneyPage({ page }: { page: AppPage }) {
  const heading = pageHeadings[page] ?? pageHeadings['investment-overview']!
  let content: ReactNode

  switch (page) {
    case 'market-opportunity':
      content = <MarketOpportunity />
      break
    case 'business-model':
      content = <BusinessModel />
      break
    case 'validation-traction':
      content = <ValidationTraction />
      break
    case 'growth-scale':
      content = <GrowthScale />
      break
    case 'investment-case':
      content = <InvestmentCase />
      break
    default:
      content = <InvestmentOverview />
  }

  return <><PageHeading eyebrow="Investor journey" title={heading.title} description={heading.description} /><JourneyLayerGuide />{content}<Progression page={page} /></>
}

export default InvestorJourneyPage
