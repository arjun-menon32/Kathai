import { useState } from 'react'
import type { AudienceId, StageName } from '../data/journeyData'
import { journeyStages, personas, segmentJourney, segments } from '../data/journeyData'
import { EvidenceTag, PageHeading } from '../components/PageHeading'

const initialSelection: AudienceId[] = ['general', 'gen-z']

function SegmentsPage() {
  const [selectedIds, setSelectedIds] = useState<AudienceId[]>(initialSelection)
  const [stage, setStage] = useState<StageName>('Awareness')
  const selectedSegments = segments.filter((segment) => selectedIds.includes(segment.id))

  const toggleSegment = (id: AudienceId) => {
    setSelectedIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id)
      return [...current, id]
    })
  }

  return (
    <>
      <PageHeading
        eyebrow="Audience strategy"
        title="Compare the audience hypotheses."
        description="Choose two or three segments. Compare their needs and journey goals side by side; these are strategic profiles, not measured customer groups."
      />

      <section className="detail-section compare-controls" aria-label="Choose audience segments">
        <div className="control-heading">
          <div><span className="section-kicker">Compare</span><strong>Select at least two audiences</strong></div>
          <label className="select-control">Journey stage
            <select value={stage} onChange={(event) => setStage(event.target.value as StageName)}>
              {journeyStages.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>
        <div className="segment-options">
          {segments.map((segment) => (
            <label className="segment-option" key={segment.id}>
              <input type="checkbox" checked={selectedIds.includes(segment.id)} onChange={() => toggleSegment(segment.id)} />
              <span>{segment.label}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="detail-section" aria-label="Audience comparison">
        {selectedSegments.length < 2 ? (
          <p className="inline-notice">Select one more audience to compare.</p>
        ) : (
          <div className="compare-scroll" role="region" aria-label="Side-by-side segment comparison" tabIndex={0}>
            <div className={`comparison-table compare-count-${selectedSegments.length}`} style={{ gridTemplateColumns: `minmax(150px, 0.72fr) repeat(${selectedSegments.length}, minmax(230px, 1fr))` }}>
              <div className="compare-cell compare-label compare-header">Comparison</div>
              {selectedSegments.map((segment) => (
                <div className="compare-cell compare-header" key={segment.id}>
                  <span className="section-kicker">Audience hypothesis</span>
                  <h2>{segment.label}</h2>
                  <p>{segment.tagline}</p>
                </div>
              ))}
              {[
                { label: 'Audience lens', getValue: (id: AudienceId) => segments.find((item) => item.id === id)?.detail ?? '' },
                { label: 'Priority needs', getValue: (id: AudienceId) => segments.find((item) => item.id === id)?.focus.join(' · ') ?? '' },
                { label: `${stage} goal`, getValue: (id: AudienceId) => segmentJourney[id].find((item) => item.stage === stage)?.objective ?? '' },
                { label: 'Measures to validate', getValue: (id: AudienceId) => segmentJourney[id].find((item) => item.stage === stage)?.successMeasures.join(' · ') ?? '' },
              ].map((row) => (
                <div className="comparison-row" key={row.label}>
                  <div className="compare-cell compare-label">{row.label}</div>
                  {selectedSegments.map((segment) => (
                    <div className="compare-cell" key={segment.id}>{row.getValue(segment.id)}</div>
                  ))}
                </div>
              ))}
              <div className="comparison-row">
                <div className="compare-cell compare-label">Evidence status</div>
                {selectedSegments.map((segment) => (
                  <div className="compare-cell" key={segment.id}><EvidenceTag status="Working hypothesis" /></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="detail-section persona-section" aria-labelledby="persona-details-title">
        <div className="section-heading-row">
          <div><p className="eyebrow">Go one level deeper</p><h2 id="persona-details-title">Persona hypotheses</h2></div>
          <span className="source-note">Illustrative profiles · validate through research</span>
        </div>
        <div className="persona-accordions">
          {selectedSegments.map((segment) => {
            const segmentPersonas = personas.filter((persona) => persona.segment === segment.id)
            return (
              <details className="disclosure-row" key={segment.id}>
                <summary><span>{segment.label}</span><span>{segmentPersonas.length} working profiles</span></summary>
                <div className="disclosure-content">
                  {segmentPersonas.map((persona) => (
                    <details className="persona-disclosure" key={persona.id}>
                      <summary>{persona.name}<EvidenceTag status={persona.evidenceStatus} /></summary>
                      <div className="persona-copy">
                        <p><strong>Core need:</strong> {persona.jobToBeDone}</p>
                        <p><strong>Primary context:</strong> {persona.primaryContext}</p>
                        <p><strong>Questions to validate:</strong> {persona.questionsToValidate.slice(0, 2).join(' ')}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </details>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default SegmentsPage
