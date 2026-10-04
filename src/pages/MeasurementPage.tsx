import { metrics } from '../data/journeyData'
import { PageHeading } from '../components/PageHeading'

function MeasurementPage() {
  const categories = Array.from(new Set(metrics.map((metric) => metric.category)))

  return (
    <>
      <PageHeading
        eyebrow="The growth rhythm"
        title="From a first cup to a favourite ritual."
        description="Follow the signals that show how discovery becomes a memorable experience, a return visit and a recommendation."
      />

      <section className="data-readout" aria-label="Data status">
        <div><span className="section-kicker">The growth loop</span><strong>Discover · Experience · Return · Share</strong></div>
        <p>Read each signal in context: what brought someone in, what made the first cup memorable, and what gave them a reason to come back.</p>
      </section>

      <section className="detail-section metric-framework" aria-label="Growth signals by journey stage">
        {categories.map((category, index) => {
          const categoryMetrics = metrics.filter((metric) => metric.category === category)
          return (
            <details className="disclosure-row metric-group" key={category}>
              <summary><span className="metric-index">0{index + 1}</span><span className="metric-category">{category}<small>{categoryMetrics.length} growth signals</small></span></summary>
              <div className="metric-list">
                <ul className="metric-pills">{categoryMetrics.map((metric) => <li key={metric.metric}>{metric.metric}</li>)}</ul>
              </div>
            </details>
          )
        })}
      </section>
    </>
  )
}

export default MeasurementPage
