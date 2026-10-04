import { metrics } from '../data/journeyData'
import { EvidenceTag, PageHeading } from '../components/PageHeading'

function MeasurementPage() {
  const categories = Array.from(new Set(metrics.map((metric) => metric.category)))

  return (
    <>
      <PageHeading
        eyebrow="Measurement framework"
        title="Know what to track before scaling."
        description="These are recommended indicators, not current results. Agree definitions, sources and baselines before setting targets."
        action={<span className="status-chip status-muted">No actuals provided</span>}
      />

      <section className="data-readout" aria-label="Data status">
        <div><span className="section-kicker">Current status</span><strong>Baseline not established</strong></div>
        <p>Connect point-of-sale, customer and cost data before presenting growth, retention or margin trends.</p>
      </section>

      <section className="detail-section metric-framework" aria-label="Recommended indicators by journey stage">
        {categories.map((category, index) => {
          const categoryMetrics = metrics.filter((metric) => metric.category === category)
          return (
            <details className="disclosure-row metric-group" key={category}>
              <summary><span className="metric-index">0{index + 1}</span><span className="metric-category">{category}<small>{categoryMetrics.length} indicators to define</small></span><span className="disclosure-hint">Recommended only</span></summary>
              <div className="metric-list">
                {categoryMetrics.map((metric) => (
                  <details className="metric-item" key={metric.metric}>
                    <summary><span>{metric.metric}</span><EvidenceTag status={metric.evidenceStatus} /></summary>
                    <p>{metric.description}</p>
                  </details>
                ))}
              </div>
            </details>
          )
        })}
      </section>
    </>
  )
}

export default MeasurementPage
