import { useId, useState, type ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export default function Accordion({ title, children }: Props) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className="accordion">
      <button
        className="accordion-trigger"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        {title} <span aria-hidden="true">{expanded ? '▲' : '▼'}</span>
      </button>
      {expanded && (
        <div id={panelId} className="accordion-panel">
          {children}
        </div>
      )}
    </div>
  )
}