import { useState } from 'react'
import type { AudienceId, StageName } from '../data/types'
import { personas, segments } from '../data/audiences'
import { genAlphaJourneys, journeyStages, segmentJourney } from '../data/journeys'
import { PageHeading } from '../components/PageHeading'
import GenAlphaPairedJourney from '../components/GenAlphaPairedJourney'
import PersonaEvidence from '../components/PersonaEvidence'
import PersonaDecisionSummary from '../components/PersonaDecisionSummary'

function JourneyPage() {
  const [audience, setAudience] = useState<AudienceId>('general')
  const [personaId, setPersonaId] = useState('')
  const [stage, setStage] = useState<StageName>('Awareness')
  const [compareOpen, setCompareOpen] = useState(false)
  const currentSegment = segments.find((segment) => segment.id === audience) ?? segments[0]
  const currentDetail = segmentJourney[audience].find((item) => item.stage === stage) ?? segmentJourney[audience][0]
  const audiencePersonas = personas.filter((persona) => persona.segment === audience)
  const focusedPersona = audiencePersonas.find((persona) => persona.id === personaId)
  const focusedRole = focusedPersona?.journeyRole
  const roleJourney = focusedRole ? genAlphaJourneys.find((journey) => journey.id === focusedRole) : undefined
  const roleStage = roleJourney?.stages.find((item) => item.name === stage)

  return (
    <>
      <PageHeading
        eyebrow="Customer journey"
        title="Walk the journey, persona by persona."
        description="Choose who you are following, then move through the moments that shape discovery, experience and return."
        action={<div className="journey-heading-controls">
          <label className="select-control">Audience
            <select value={audience} onChange={(event) => { setAudience(event.target.value as AudienceId); setPersonaId('') }}>
              {segments.map((segment) => <option key={segment.id} value={segment.id}>{segment.label}</option>)}
            </select>
          </label>
          <label className="select-control">Persona
            <select value={personaId} onChange={(event) => setPersonaId(event.target.value)}>
              <option value="">Audience-wide view</option>
              {audiencePersonas.map((persona) => <option key={persona.id} value={persona.id}>{persona.name}</option>)}
            </select>
          </label>
        </div>}
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
          </div>
          <p className="journey-objective">{roleStage?.goal ?? currentDetail.objective}</p>
          {focusedPersona && <div className="persona-stage-focus"><span className="section-kicker">{focusedPersona.name}</span><p>{focusedPersona.stageFocus[stage]}</p></div>}
          {focusedPersona && <PersonaDecisionSummary decisionProfile={focusedPersona.decisionProfile} primaryContext={focusedPersona.primaryContext} />}
          {focusedPersona && <PersonaEvidence personaId={focusedPersona.id} evidence={focusedPersona.researchEvidence} validationQuestions={focusedPersona.questionsToValidate} />}
          <div className="journey-detail-grid">
            <div><span className="section-kicker">What matters now</span><p>{focusedPersona ? focusedPersona.needs.slice(0, 3).join(' · ') : currentDetail.emotions.join(' · ')}</p></div>
            <div><span className="section-kicker">What can get in the way</span><ul>{(focusedPersona ? focusedPersona.challenges : currentDetail.painPoints).slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="journey-response"><span className="section-kicker">Kathai’s response</span><p>{roleStage?.kathaiResponse ?? currentDetail.response}</p></div>
          </div>
          <details className="journey-more">
            <summary>Explore actions, questions and touchpoints</summary>
            <div className="journey-more-grid">
              <div><span className="section-kicker">Customer actions</span><ul>{(roleStage?.actions ?? currentDetail.actions).map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><span className="section-kicker">Questions in this moment</span><ul>{(roleStage?.questions ?? currentDetail.questions).map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><span className="section-kicker">Touchpoints</span><ul>{currentDetail.touchpoints.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </details>
          <button className="text-action" type="button" aria-expanded={compareOpen} onClick={() => setCompareOpen((open) => !open)}>
            {compareOpen ? 'Hide stage comparison' : `Compare ${stage.toLowerCase()} across audiences`}
          </button>
        </article>
      </section>

      {focusedPersona?.guardianJourney && (
        <section className="detail-section gen-alpha-paired-section journey-paired-section" aria-labelledby="paired-journey-title">
          <div className="section-heading-row">
            <div><p className="eyebrow">Gen Alpha · paired journey</p><h2 id="paired-journey-title">Child and parent/guardian</h2></div>
            <span className="source-note">Child influences; guardian decides and pays where applicable</span>
          </div>
          <GenAlphaPairedJourney stages={focusedPersona.guardianJourney} />
        </section>
      )}

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
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default JourneyPage
