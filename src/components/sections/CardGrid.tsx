import type { SectionProps } from '../../types'

export default function CardGrid({ heading, subtext, items }: SectionProps) {
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
              <p className="mx-auto" style={{ color: 'var(--color-text-muted)', fontSize: '1.0625rem', maxWidth: '520px' }}>
                {subtext}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)' }}
            >
              {/* Icon placeholder */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-surface)', opacity: 0.85 }}
              >
                {i + 1}
              </div>
              <p className="font-medium leading-snug" style={{ color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
