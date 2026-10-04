import { ArrowRight, CircleAlert, MapPin, Sparkles } from 'lucide-react'
import { PageHeading } from '../components/PageHeading'
import type { AppPage } from '../components/AppHeader'

type DashboardPageProps = {
  onNavigate: (page: AppPage) => void
}

const dataGaps = [
  { label: 'Revenue', value: 'Not supplied' },
  { label: 'Customers', value: 'Not supplied' },
  { label: 'Repeat visits', value: 'Not supplied' },
  { label: 'Unit economics', value: 'Not supplied' },
]

const growthSteps = [
  { number: '01', title: 'Earn discovery', detail: 'Prove which channels bring qualified interest.' },
  { number: '02', title: 'Prove the experience', detail: 'Test whether taste and service justify the price.' },
  { number: '03', title: 'Build repeat visits', detail: 'Measure return behaviour before forecasting scale.' },
]

function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <>
      <PageHeading
        eyebrow="Investor brief · strategy view"
        title="Kathai, at a glance."
        description="A premium hot chocolate concept built around crafted taste, calm ritual and human connection."
        action={<span className="status-chip"><span /> Performance data not connected</span>}
      />

      <section className="dashboard-section" aria-labelledby="performance-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Growth snapshot</p>
            <h2 id="performance-title">The numbers investors need</h2>
          </div>
          <span className="source-note">No operating data in the source materials</span>
        </div>
        <div className="data-grid">
          {dataGaps.map((item) => (
            <div className="data-cell" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <p className="data-footnote"><CircleAlert size={15} /> Growth rates and forecasts are intentionally withheld until actuals and a reporting period are available.</p>
      </section>

      <section className="concept-band concept-summary" aria-label="Concept summary">
        <div className="concept-copy">
          <span className="section-kicker">The concept</span>
          <h2>A premium café ritual, not just a drink.</h2>
          <p>Lead with sensory quality and considered service. Make the experience distinctive enough to earn a return visit.</p>
        </div>
        <div className="concept-facts">
          <div><span>Launch focus</span><strong><MapPin size={15} /> Bengaluru</strong></div>
          <div><span>Price framing</span><strong>₹450–₹600 <small>hypothesis</small></strong></div>
          <div><span>Expansion lens</span><strong>India, after validation</strong></div>
        </div>
      </section>

      <section className="dashboard-section growth-section" aria-labelledby="growth-path-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Recommended sequence · not a forecast</p>
            <h2 id="growth-path-title">What needs to be proven next</h2>
          </div>
          <Sparkles className="section-mark" size={21} aria-hidden="true" />
        </div>
        <div className="growth-steps">
          {growthSteps.map((step) => (
            <article className="growth-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <div className="bottom-grid">
        <section className="readout-panel" aria-labelledby="readout-title">
          <p className="eyebrow">Five-minute readout</p>
          <h2 id="readout-title">The opportunity is clear. Traction is still unreported.</h2>
          <p>The strategy defines a premium Bengaluru launch, three audience hypotheses and a repeat-led experience. The next investor update needs sales, customer, margin and retention actuals.</p>
        </section>
        <section className="explore-panel" aria-labelledby="explore-title">
          <p className="eyebrow">Explore the detail</p>
          <h2 id="explore-title">Go deeper when you need to.</h2>
          <div className="explore-links">
            <button type="button" onClick={() => onNavigate('audiences')}>Compare audiences <ArrowRight size={15} /></button>
            <button type="button" onClick={() => onNavigate('journey')}>Review the journey <ArrowRight size={15} /></button>
            <button type="button" onClick={() => onNavigate('measurement')}>See measures to track <ArrowRight size={15} /></button>
          </div>
        </section>
      </div>
    </>
  )
}

export default DashboardPage
