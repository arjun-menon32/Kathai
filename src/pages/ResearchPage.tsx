import { contextualLinks, researchPlan, researchReferences, sources } from '../data/journeyData'
import { EvidenceTag, PageHeading } from '../components/PageHeading'

function ResearchPage() {
  return (
    <>
      <PageHeading
        eyebrow="Evidence and validation"
        title="Separate the idea from the proof."
        description="The strategy materials describe what to test next. They do not establish market demand or observed customer behaviour."
      />

      <section className="research-list" aria-label="Recommended research plan">
        <div className="section-heading-row">
          <div><p className="eyebrow">Next learning agenda</p><h2>Decisions to validate</h2></div>
          <span className="source-note">Open an item for method and decision</span>
        </div>
        {researchPlan.map((item, index) => (
          <details className="disclosure-row research-item" key={item.title}>
            <summary><span className="metric-index">0{index + 1}</span><span className="research-title">{item.title}<small>{item.objective}</small></span><EvidenceTag status={item.status} /></summary>
            <div className="research-content">
              <p><strong>Suggested method:</strong> {item.suggestedMethod}</p>
              <p><strong>Capture:</strong> {item.capture}</p>
              <p><strong>Decision:</strong> {item.decision}</p>
            </div>
          </details>
        ))}
      </section>

      <section className="detail-section sources-section">
        <details className="disclosure-row">
          <summary><span>Source notes</span><span>{sources.length} strategy references</span></summary>
          <ul className="source-list">{sources.map((source) => <li key={source}>{source}</li>)}</ul>
        </details>
        <details className="disclosure-row">
          <summary><span>External starting points</span><span>{contextualLinks.length} links</span></summary>
          <div className="external-links">{contextualLinks.map((link) => <a href={link.href} key={link.href} target="_blank" rel="noreferrer"><strong>{link.title}</strong><span>{link.description}</span></a>)}</div>
        </details>
        <details className="disclosure-row">
          <summary><span>References cited in the source material</span><span>{researchReferences.length} links</span></summary>
          <div className="reference-list">{researchReferences.map((reference) => <a href={reference.href} key={reference.reference} target="_blank" rel="noreferrer"><strong>{reference.reference} {reference.title}</strong><span>{reference.publisher}</span></a>)}</div>
        </details>
      </section>
    </>
  )
}

export default ResearchPage
