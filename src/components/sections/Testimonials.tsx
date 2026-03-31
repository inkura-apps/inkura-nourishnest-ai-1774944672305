import type { SectionProps } from '../../types'

export default function Testimonials({ heading, items }: SectionProps) {
  if (!items?.length) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--max-width)' }}>
        {heading && (
          <h2
            className="font-bold text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-text)' }}
          >
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            // Split on last " — " to extract attribution if present
            const lastDash = item.lastIndexOf(' — ')
            const quote = lastDash > -1 ? item.slice(0, lastDash) : item
            const attribution = lastDash > -1 ? item.slice(lastDash + 3) : null

            return (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                <span
                  className="text-5xl leading-none font-serif"
                  style={{ color: 'var(--color-accent)', fontFamily: 'Georgia, serif', lineHeight: 1 }}
                >
                  "
                </span>
                <p className="leading-relaxed flex-1" style={{ color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                  {quote}
                </p>
                {attribution && (
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    — {attribution}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
