import { ArrowRight, MapPin, UsersRound } from 'lucide-react'
import { PageHeading } from '../components/PageHeading'
import type { AppPage } from '../components/AppHeader'
import { journeyStages } from '../data/journeyData'
import { segments, strategicAudienceFocus } from '../data/audiences'

type DashboardPageProps = {
  onNavigate: (page: AppPage) => void
}

function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <>
      <PageHeading
        eyebrow="Kathai · Bengaluru launch"
        title="A story in every cup."
        description="Premium hot chocolate shaped around craft, comfort and the people we bring together."
        action={<span className="status-chip status-muted"><MapPin size={14} /> Bengaluru first</span>}
      />

      <section className="concept-band strategy-hero" aria-label="Kathai launch proposition">
        <div className="concept-copy">
          <span className="section-kicker">The launch proposition</span>
          <h2>Make the cup a moment worth returning to.</h2>
          <p>Lead with a distinctive sensory experience, then build a trusted ritual through thoughtful service, community and shared discovery.</p>
        </div>
        <div className="concept-facts">
          <div><span>Launch market</span><strong><MapPin size={15} /> Bengaluru</strong></div>
          <div><span>Signature drink price frame</span><strong>₹450–₹600</strong></div>
          <div><span>Growth path</span><strong>Discovery → Ritual → Advocacy</strong></div>
        </div>
      </section>

      <section className="dashboard-section audience-snapshot" aria-labelledby="audience-snapshot-title">
        <div className="section-heading-row">
          <div><p className="eyebrow">Who Kathai is for</p><h2 id="audience-snapshot-title">Three audience lenses. One shared ritual.</h2></div>
          <button className="text-action" type="button" onClick={() => onNavigate('audiences')}>Explore audiences <ArrowRight size={15} /></button>
        </div>
        <div className="audience-snapshot-grid">
          {segments.map((segment) => (
            <article className="audience-snapshot-item" key={segment.id}>
              <h3>{segment.label}</h3>
              <p>{segment.tagline}</p>
              <span>{segment.priorities.slice(0, 3).join(' · ')}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="community-focus" aria-label="LGBTQ+ audience strategy">
        <div className="community-share"><strong>{strategicAudienceFocus.targetShare}</strong><span>target audience focus</span></div>
        <div className="community-copy">
          <p className="eyebrow">{strategicAudienceFocus.label}</p>
          <h2>Belonging is part of the experience.</h2>
          <p>{strategicAudienceFocus.experience}</p>
        </div>
        <UsersRound className="community-mark" size={25} aria-hidden="true" />
      </section>

      <section className="journey-preview" aria-labelledby="journey-preview-title">
        <div className="section-heading-row">
          <div><p className="eyebrow">The customer journey</p><h2 id="journey-preview-title">From first spark to a Kathai ritual.</h2></div>
          <button className="text-action" type="button" onClick={() => onNavigate('journey')}>Open journey <ArrowRight size={15} /></button>
        </div>
        <ol className="journey-line">
          {journeyStages.map((stage, index) => <li key={stage}><span>0{index + 1}</span>{stage}</li>)}
        </ol>
      </section>
    </>
  )
}

export default DashboardPage
