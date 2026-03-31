import type { SectionProps } from '../../types'

// Parse "12,000 Rides Shared" → { number: "12,000", label: "Rides Shared" }
function parseStat(item: string): { number: string; label: string } {
  const match = item.match(/^([\d,./k%+]+\s*[A-Za-z%]*)\s+(.+)$/i)
  if (match) return { number: match[1].trim(), label: match[2].trim() }
  const parts = item.split(' ')
  return { number: parts[0], label: parts.slice(1).join(' ') }
}

export default function Stats({ heading, items }: SectionProps) {
  if (!items?.length) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--max-width)' }}>
        {heading && (
          <h2
            className="font-bold text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', color: 'var(--color-text)' }}
          >
            {heading}
          </h2>
        )}
        <div className={`grid gap-6 ${items.length <= 2 ? 'grid-cols-1 sm:grid-cols-2' : items.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
          {items.map((item, i) => {
            const { number, label } = parseStat(item)
            return (
              <div
                key={i}
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <p
                  className="font-extrabold mb-1"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-primary)' }}
                >
                  {number}
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  {label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
