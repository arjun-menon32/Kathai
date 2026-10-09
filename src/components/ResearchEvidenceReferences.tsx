import { researchFindings, researchSources } from '../data/research'
import type { ResearchFindingId, ResearchSourceId } from '../data/types'

export function ResearchEvidenceReferences({ findingIds }: { findingIds: ResearchFindingId[] }) {
  const findings = [...new Set(findingIds)].map((id) => researchFindings[id])
  if (findings.length === 0) return null

  const sourceGroups = new Map<ResearchSourceId, typeof findings>()
  findings.forEach((finding) => {
    const sourceFindings = sourceGroups.get(finding.sourceId) ?? []
    sourceFindings.push(finding)
    sourceGroups.set(finding.sourceId, sourceFindings)
  })
  const primaryFinding = findings[0]
  const primarySource = researchSources[primaryFinding.sourceId]
  const sourceCount = sourceGroups.size
  const evidenceTypes = [...new Set(findings.map((finding) => finding.evidenceType))]
  const findingSummary = primaryFinding.finding.length > 180
    ? `${primaryFinding.finding.slice(0, 177).trimEnd()}…`
    : primaryFinding.finding

  return (
    <section className="journey-evidence-preview" aria-label="Evidence summary">
      <div className="journey-evidence-preview-topline">
        {evidenceTypes.map((evidenceType) => <span className={`journey-evidence-type${evidenceType === 'Strategic interpretation' ? ' is-interpretation' : ''}`} key={evidenceType}>{evidenceType}</span>)}
        <span className="journey-evidence-source-count">{sourceCount} {sourceCount === 1 ? 'source' : 'sources'}</span>
      </div>
      <p className="journey-evidence-preview-finding">{findingSummary}</p>
      <p className="journey-evidence-preview-implication">
        <b>Why it matters:</b> {primaryFinding.implicationForKathai}
      </p>
      <details className="journey-research-references">
        <summary>Verify sources, methods and limitations</summary>
        <div className="journey-research-source-groups">
          {[...sourceGroups.entries()].map(([sourceId, sourceFindings]) => {
            const source = researchSources[sourceId]
            return (
              <section className="journey-research-source-group" key={sourceId}>
                <header>
                  <span className="journey-evidence-type">{source.sourceType}</span>
                  <h4>{source.title}</h4>
                  {(source.authors || source.publisher || source.publishedOn || source.accessedOn) && (
                    <p className="journey-research-citation">
                      {[source.authors, source.publisher, source.publishedOn && `Published ${source.publishedOn}`, source.accessedOn && `Accessed ${source.accessedOn}`].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  <p><b>Source context:</b> {source.researchContext}</p>
                  {source.originalPath && <p><b>Original document:</b> <code>{source.originalPath}</code></p>}
                  {source.url && (
                    <p>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.publisher ? `Open source · ${source.publisher}` : 'Open original publication'}
                      </a>
                    </p>
                  )}
                  {source.limitations.length > 0 && (
                    <div className="journey-research-source-limitations">
                      <b>Source-level limitations</b>
                      <ul>{source.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
                    </div>
                  )}
                </header>
                <ol className="journey-research-finding-list">
                  {sourceFindings.map((finding) => (
                    <li key={finding.id}>
                      <span className="journey-evidence-type">{finding.evidenceType}</span>
                      <p><b>Finding:</b> {finding.finding}</p>
                      <p><b>Location:</b> {finding.location}</p>
                      <p><b>Finding context:</b> {finding.researchContext}</p>
                      <p><b>Interpretation for KATHAI:</b> {finding.implicationForKathai}</p>
                      {finding.references?.map((reference) => (
                        <p key={reference.url}>
                          <a href={reference.url} target="_blank" rel="noreferrer">{reference.label}</a>
                        </p>
                      ))}
                      {finding.limitations.length > 0 && (
                        <div>
                          <b>Finding-specific limitations</b>
                          <ul>{finding.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            )
          })}
        </div>
      </details>
      {findings.slice(1).map((finding) => (
        <span className="sr-only" key={finding.id}>{finding.finding} {finding.implicationForKathai}</span>
      ))}
      <span className="sr-only">Primary source: {primarySource.title}</span>
    </section>
  )
}
