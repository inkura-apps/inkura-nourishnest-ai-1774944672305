import type { SectionProps } from '../../types'

export default function List({ heading, subtext, items }: SectionProps) {
  if (!items?.length) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div className="mx-auto" style={{ maxWidth: '720px' }}>
        {heading && (
          <h2
            className="font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', color: 'var(--color-text)' }}
          >
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            {subtext}
          </p>
        )}

        <ul className="space-y-4" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-surface)' }}
              >
                ✓
              </span>
              <span className="leading-relaxed" style={{ color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
