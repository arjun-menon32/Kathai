import type { GuardianJourneyStage } from '../data/types'

type GenAlphaPairedJourneyProps = {
  stages: GuardianJourneyStage[]
}

function GenAlphaPairedJourney({ stages }: GenAlphaPairedJourneyProps) {
  return (
    <div className="gen-alpha-journey-wrap">
      <table className="gen-alpha-journey">
        <thead>
          <tr>
            <th scope="col">Stage</th>
            <th scope="col">Child’s actions and wishes</th>
            <th scope="col">Parent/guardian’s actions and questions</th>
            <th scope="col">What helps them decide</th>
          </tr>
        </thead>
        <tbody>
          {stages.map((item) => (
            <tr key={item.stage}>
              <th scope="row">{item.stage}</th>
              <td data-label="Child’s actions and wishes">{item.childActions}</td>
              <td data-label="Parent/guardian’s actions and questions">{item.guardianActions}</td>
              <td data-label="What helps them decide">{item.decisionSupport}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GenAlphaPairedJourney
