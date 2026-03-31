import type { SectionProps } from '../../types'

const TIER_DETAILS: Record<number, { price: string; features: string[] }> = {
  0: { price: 'Free', features: ['5 rides per month', 'Basic matching', 'Email support'] },
  1: { price: '$12/mo', features: ['Unlimited rides', 'Priority matching', 'Chat support', 'Ride history export'] },
  2: { price: '$29/mo', features: ['Everything in Regular', 'Dedicated account manager', 'API access', 'Custom billing'] },
}

export default function Pricing({ heading, subtext, items }: SectionProps) {
  if (!items?.length) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--max-width)' }}>
        {(heading || subtext) && (
          <div className="text-center mb-12">
            {heading && (
              <h2
                className="font-bold mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-text)' }}
              >
                {heading}
              </h2>
            )}
            {subtext && (
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.0625rem' }}>{subtext}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {items.map((tier, i) => {
            const isPopular = i === Math.floor(items.length / 2)
            const details = TIER_DETAILS[i] ?? TIER_DETAILS[0]

            return (
              <div
                key={i}
                className="flex flex-col p-8 rounded-2xl transition-transform duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: isPopular ? 'var(--color-primary)' : 'var(--color-surface)',
                  border: isPopular ? 'none' : '1px solid var(--color-border)',
                  boxShadow: isPopular ? '0 8px 32px rgba(0,0,0,0.18)' : '0 2px 12px rgba(0,0,0,0.05)',
                  color: isPopular ? '#fff' : 'var(--color-text)',
                }}
              >
                {isPopular && (
                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-4 self-start px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text)' }}
                  >
                    Most Popular
                  </span>
                )}
                <p
                  className="font-bold text-xl mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: isPopular ? '#fff' : 'var(--color-text)' }}
                >
                  {tier}
                </p>
                <p
                  className="font-extrabold mb-6"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: isPopular ? '#fff' : 'var(--color-primary)' }}
                >
                  {details.price}
                </p>
                <ul className="space-y-3 flex-1 mb-8" style={{ listStyle: 'none', padding: 0 }}>
                  {details.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <span style={{ color: isPopular ? 'var(--color-accent)' : 'var(--color-accent)' }}>✓</span>
                      <span style={{ color: isPopular ? 'rgba(255,255,255,0.85)' : 'var(--color-text)' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full font-semibold py-3 rounded-xl transition-opacity duration-150 hover:opacity-90 active:opacity-80"
                  style={{
                    backgroundColor: isPopular ? 'var(--color-accent)' : 'var(--color-primary)',
                    color: isPopular ? 'var(--color-text)' : '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                  }}
                >
                  Get started
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
