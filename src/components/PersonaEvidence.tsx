import { useRef } from 'react'
import type { PersonaId, PersonaResearchEvidence } from '../data/types'
import { researchFindings, researchSources } from '../data/research'

type PersonaEvidenceProps = {
  personaId: PersonaId
  evidence: PersonaResearchEvidence
  validationQuestions: string[]
}

function PersonaEvidence({ personaId, evidence, validationQuestions }: PersonaEvidenceProps) {
  const methodologyRef = useRef<HTMLDetailsElement>(null)
  const findings = Object.values(researchFindings).filter((finding) => finding.personaIds.includes(personaId))
  const sourceIds = [...new Set(findings.map((finding) => finding.sourceId))]

  return (
    <section className="persona-evidence" aria-labelledby={`consumer-insights-${personaId}`}>
      <div className="persona-evidence-heading">
        <div>
          <span className="section-kicker">Research-informed · not customer-validated</span>
          <h3 id={`consumer-insights-${personaId}`}>Consumer &amp; Market Insights</h3>
        </div>
      </div>

      <section className="consumer-insight-preview">
        <h4>Consumer Insight</h4>
        <p>{evidence.consumerInsight}</p>
      </section>

      <section className="consumer-evidence-list">
        <h4>Research &amp; Market Evidence</h4>
        <ul>
          {findings.map((finding) => {
            const source = researchSources[finding.sourceId]
            return (
              <li key={finding.id}>
                <span className="consumer-evidence-type">{finding.evidenceType}</span>
                <p>{finding.finding}</p>
                {source.url
                  ? <a href={source.url} target="_blank" rel="noreferrer">Source: {source.title}</a>
                  : <button className="consumer-source-link" type="button" onClick={() => { if (methodologyRef.current) methodologyRef.current.open = true }}>Source: {source.title}</button>}
                {finding.references?.map((reference) => (
                  <a className="consumer-secondary-source" key={reference.url} href={reference.url} target="_blank" rel="noreferrer">{reference.label}</a>
                ))}
              </li>
            )
          })}
        </ul>
      </section>

      <div className="consumer-insight-columns">
        <section>
          <h4>What This Means for KATHAI</h4>
          <ul>{evidence.whatThisMeansForKathai.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h4>Opportunities to Explore</h4>
          <ul>{evidence.opportunitiesToExplore.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>

      <details className="consumer-methodology" ref={methodologyRef} id={`sources-methodology-${personaId}`}>
        <summary>Sources &amp; Methodology</summary>
        <div className="consumer-methodology-content">
          <p className="consumer-evidence-caveat">Evidence describes its cited research or market context. It does not by itself establish KATHAI customer demand or validate an individual persona.</p>
          {sourceIds.map((sourceId) => {
            const source = researchSources[sourceId]
            const sourceFindings = findings.filter((finding) => finding.sourceId === sourceId)
            return (
              <section className="consumer-source" key={source.id} id={`source-${source.id}`}>
                <span className="consumer-evidence-type">{source.sourceType}</span>
                <h5>{source.title}</h5>
                <p><strong>Source ID:</strong> {source.id}</p>
                {source.authors && <p><strong>Authors:</strong> {source.authors}</p>}
                {source.publisher && <p><strong>Publication:</strong> {source.publisher}</p>}
                <p><strong>Publication/field date:</strong> {source.publishedOn ?? 'Not stated in source'}</p>
                {source.accessedOn && <p><strong>Accessed:</strong> {source.accessedOn}</p>}
                {source.originalPath && <p><strong>Original document:</strong> <code>{source.originalPath}</code></p>}
                {source.url && <p><a href={source.url} target="_blank" rel="noreferrer">Open source</a></p>}
                <p><strong>Research context:</strong> {source.researchContext}</p>
                <ul>{sourceFindings.map((finding) => (
                  <li key={finding.id}>
                    <strong>{finding.location}</strong> {finding.researchContext}
                    <br /><strong>KATHAI implication:</strong> {finding.implicationForKathai}
                    <br /><strong>Finding limitations:</strong> {finding.limitations.join(' ')}
                  </li>
                ))}</ul>
                <ul aria-label={`Source limitations for ${source.title}`}>
                  {source.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
                </ul>
              </section>
            )
          })}
          <section className="consumer-source">
            <h5>Persona interpretation and validation</h5>
            <p>{evidence.interpretation}</p>
            <h6>Assumptions to test</h6>
            <ul>{evidence.kathaiAssumptions.map((item) => <li key={item}>{item}</li>)}</ul>
            <h6>Persona-specific evidence limitations</h6>
            <ul>{evidence.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
            <h6>Questions to validate</h6>
            <ul>{validationQuestions.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
      </details>
    </section>
  )
}

export default PersonaEvidence
