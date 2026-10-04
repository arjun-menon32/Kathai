import { contextualLinks, researchPlan, researchReferences, sources } from '../data/journeyData'
import { PageHeading } from '../components/PageHeading'

function ResearchPage() {
  return (
    <>
      <PageHeading
        eyebrow="The learning agenda"
        title="Keep learning from every cup."
        description="Explore the decisions that deepen Kathai’s taste, service, belonging, family experience and repeat rituals."
      />

      <p className="research-fun-note">Fun note: we visited the actual craft chocolate shops and for that we’d like to thank Navin.</p>

      <section className="research-list" aria-label="Recommended research plan">
        <div className="section-heading-row">
          <div><p className="eyebrow">Experience development</p><h2>Choose a path to explore</h2></div>
          <span className="source-note">Method, signal and decision</span>
        </div>
        {researchPlan.map((item, index) => (
          <details className="disclosure-row research-item" key={item.title}>
            <summary><span className="metric-index">0{index + 1}</span><span className="research-title">{item.title}<small>{item.objective}</small></span></summary>
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
