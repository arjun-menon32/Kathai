import { useState } from 'react'
import type { AudienceId } from '../data/journeyData'
import { personas, segments } from '../data/audiences'
import { journeyStages, segmentJourney } from '../data/journeys'
import { PageHeading } from '../components/PageHeading'

function SegmentsPage() {
  const [audience, setAudience] = useState<AudienceId>('general')
  const segment = segments.find((item) => item.id === audience) ?? segments[0]
  const segmentPersonas = personas.filter((persona) => persona.segment === audience)

  return (
    <>
      <PageHeading
        eyebrow="Audience profiles"
        title="Start with the person."
        description="Choose an audience to see what matters to them, how they move through the experience, and what earns their return."
      />

      <nav className="audience-switcher" aria-label="Choose an audience">
        {segments.map((item) => (
          <button key={item.id} type="button" aria-pressed={audience === item.id} onClick={() => setAudience(item.id)}>{item.label}</button>
        ))}
      </nav>

      <section className="audience-context" aria-labelledby="audience-title">
        <div>
          <p className="eyebrow">{segment.tagline}</p>
          <h2 id="audience-title">{segment.label}</h2>
          <p>{segment.detail}</p>
        </div>
        <div className="audience-priorities">
          <span className="section-kicker">What matters</span>
          <ul>{segment.priorities.map((priority) => <li key={priority}>{priority}</li>)}</ul>
        </div>
      </section>

      <section className="detail-section persona-section" aria-labelledby="persona-details-title">
        <div className="section-heading-row">
          <div><p className="eyebrow">People within this audience</p><h2 id="persona-details-title">Meet the personas</h2></div>
          <span className="source-note">{segmentPersonas.length} profiles</span>
        </div>
        <div className="persona-accordions">
          {segmentPersonas.map((persona) => (
            <details className="persona-card" key={persona.id}>
              <summary>
                <span>{persona.name}</span>
                <small>{persona.needState}</small>
              </summary>
              <div className="persona-card-content">
                <p>{persona.profile}</p>
                {persona.statement && <blockquote>{persona.statement}</blockquote>}
                <div className="persona-insights">
                  <div><span className="section-kicker">What they seek</span><p>{persona.jobToBeDone}</p></div>
                  <div><span className="section-kicker">What gets in the way</span><p>{persona.challenges.slice(0, 2).join(' · ')}</p></div>
                  <div><span className="section-kicker">Where it happens</span><p>{persona.occasions.slice(0, 3).join(' · ')}</p></div>
                  <div><span className="section-kicker">What earns advocacy</span><p>{persona.stageFocus.Advocacy}</p></div>
                </div>
                <details className="persona-journey">
                  <summary>Follow this persona through the journey</summary>
                  <ol>{journeyStages.map((item) => <li key={item}><strong>{item}</strong><span>{persona.stageFocus[item] ?? segmentJourney[audience].find((journey) => journey.stage === item)?.objective}</span></li>)}</ol>
                </details>
              </div>
            </details>
          ))}
        </div>
      </section>

    </>
  )
}

export default SegmentsPage
