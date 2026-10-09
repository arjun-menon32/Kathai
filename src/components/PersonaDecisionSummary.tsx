import type { PersonaDecisionProfile } from '../data/types'

type PersonaDecisionSummaryProps = {
  decisionProfile: PersonaDecisionProfile
  primaryContext: string
}

function PersonaDecisionSummary({ decisionProfile, primaryContext }: PersonaDecisionSummaryProps) {
  return (
    <details className="persona-decision-profile">
      <summary>Purchase and decision profile</summary>
      <div className="persona-decision-grid">
        <p className="persona-decision-caveat">Strategic profile hypotheses; see the evidence panel for source scope and validation status.</p>
        <div><span className="section-kicker">Primary consumer need</span><p>{decisionProfile.primaryConsumerNeed}</p></div>
        <div><span className="section-kicker">Consumer context</span><p>{primaryContext}</p></div>
        <div><span className="section-kicker">Purchase motivation</span><p>{decisionProfile.uniquePurchaseMotivation}</p></div>
        <div><span className="section-kicker">Main purchase occasion</span><p>{decisionProfile.primaryPurchaseOccasion}</p></div>
        <div><span className="section-kicker">Main barrier</span><p>{decisionProfile.mainPurchaseBarrier}</p></div>
        <div><span className="section-kicker">Decision-making role</span><p>{decisionProfile.decisionMakingRole}</p></div>
        <div><span className="section-kicker">What makes this persona distinct</span><p>{decisionProfile.differentiation}</p></div>
        <div><span className="section-kicker">Not this persona when…</span><p>{decisionProfile.notThisPersonaWhen}</p></div>
        <div><span className="section-kicker">Purchase triggers</span><ul>{decisionProfile.purchaseTriggers.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><span className="section-kicker">Decision factors</span><ul>{decisionProfile.decisionFactors.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div>
          <span className="section-kicker">Discovery channels · to validate</span>
          {decisionProfile.discoveryChannels?.length
            ? <ul>{decisionProfile.discoveryChannels.map((item) => <li key={item}>{item}</li>)}</ul>
            : <p>Not specified; validate before channel planning.</p>}
        </div>
        <div><span className="section-kicker">Brand engagement opportunities</span><ul>{decisionProfile.brandEngagementOpportunities.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><span className="section-kicker">Repeat-purchase drivers</span><ul>{decisionProfile.repeatPurchaseDrivers.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><span className="section-kicker">Advocacy drivers</span><ul>{decisionProfile.advocacyDrivers.map((item) => <li key={item}>{item}</li>)}</ul></div>
        {decisionProfile.overlapNote && <div className="persona-overlap-note"><span className="section-kicker">Overlap to review</span><p>{decisionProfile.overlapNote}</p></div>}
      </div>
    </details>
  )
}

export default PersonaDecisionSummary
