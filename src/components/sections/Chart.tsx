import type { SectionProps } from '../../types'

const BAR_HEIGHTS = [55, 80, 40, 95, 65, 75, 50]

export default function Chart({ heading, subtext, items }: SectionProps) {
  if (!items?.length) return null

  const bars = items.slice(0, 7)

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div className="mx-auto" style={{ maxWidth: '800px' }}>
        {heading && (
          <h2
            className="font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', color: 'var(--color-text)' }}
          >
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="mb-10 leading-relaxed" style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            {subtext}
          </p>
        )}

        <div
          className="p-8 rounded-2xl"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          <div className="flex items-end justify-around gap-4" style={{ height: '200px' }}>
            {bars.map((label, i) => {
              const h = BAR_HEIGHTS[i % BAR_HEIGHTS.length]
              return (
                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full rounded-t-lg transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
                      opacity: 0.85,
                    }}
                  />
                  <span
                    className="text-xs text-center leading-tight font-medium"
                    style={{ color: 'var(--color-text-muted)', maxWidth: '64px' }}
                  >
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
