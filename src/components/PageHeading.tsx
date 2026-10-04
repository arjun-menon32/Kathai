import type { ReactNode } from 'react'

type PageHeadingProps = {
  eyebrow: string
  title: string
  description: string
  action?: ReactNode
}

export function PageHeading({ eyebrow, title, description, action }: PageHeadingProps) {
  return (
    <div className="page-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {action && <div className="page-heading-action">{action}</div>}
    </div>
  )
}

export function EvidenceTag({ status }: { status: string }) {
  return <span className="evidence-tag">{status}</span>
}
