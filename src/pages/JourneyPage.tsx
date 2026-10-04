import { useState } from 'react'
import type { AudienceId, StageName } from '../data/journeyData'
import { journeyStages, segmentJourney, segments } from '../data/journeyData'
import { EvidenceTag, PageHeading } from '../components/PageHeading'

function JourneyPage() {
  const [audience, setAudience] = useState<AudienceId>('general')
  const [stage, setStage] = useState<StageName>('Awareness')
  const [compareOpen, setCompareOpen] = useState(false)
  const currentSegment = segments.find((segment) => segment.id === audience) ?? segments[0]
  const currentDetail = segmentJourney[audience].find((item) => item.stage === stage) ?? segmentJourney[audience][0]

  return (
    <>
      <PageHeading
        eyebrow="Customer journey"
        title="Follow one stage at a time."
        description="A focused view of the customer goal, likely friction and recommended response. Switch audiences or compare the same stage across segments."
        action={<label className="select-control">Audience
          <select value={audience} onChange={(event) => setAudience(event.target.value as AudienceId)}>
            {segments.map((segment) => <option key={segment.id} value={segment.id}>{segment.label}</option>)}
          </select>
        </label>}
      />

      <section className="detail-section journey-controls" aria-label="Journey stages">
        <div className="stage-tabs" role="group" aria-label="Choose journey stage">
          {journeyStages.map((item, index) => (
            <button key={item} type="button" aria-pressed={stage === item} onClick={() => setStage(item)}>
              <span>0{index + 1}</span>{item}
            </button>
          ))}
        </div>
        <article className="journey-focus">
          <div className="journey-focus-header">
            <div><p className="eyebrow">{currentSegment.label}</p><h2>{stage}</h2></div>
            <EvidenceTag status={currentDetail.evidenceStatus} />
          </div>
          <p className="journey-objective">{currentDetail.objective}</p>
          <div className="journey-detail-grid">
            <div><span className="section-kicker">Recommended response</span><p>{currentDetail.response}</p></div>
            <div><span className="section-kicker">Key actions</span><ul>{currentDetail.actions.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><span className="section-kicker">Potential friction</span><ul>{currentDetail.painPoints.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><span className="section-kicker">Success measures to validate</span><ul>{currentDetail.successMeasures.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <button className="text-action" type="button" aria-expanded={compareOpen} onClick={() => setCompareOpen((open) => !open)}>
            {compareOpen ? 'Hide stage comparison' : `Compare ${stage.toLowerCase()} across audiences`}
          </button>
        </article>
      </section>

      {compareOpen && (
        <section className="stage-comparison" aria-label={`${stage} audience comparison`}>
          {segments.map((segment) => {
            const detail = segmentJourney[segment.id].find((item) => item.stage === stage)
            if (!detail) return null
            return (
              <article className="stage-comparison-item" key={segment.id}>
                <h3>{segment.label}</h3>
                <p>{detail.objective}</p>
                <span className="section-kicker">Response</span>
                <p>{detail.response}</p>
                <EvidenceTag status={detail.evidenceStatus} />
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default JourneyPage
