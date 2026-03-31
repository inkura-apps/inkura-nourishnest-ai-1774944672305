import type { SectionProps } from '../../types'

export default function CTA({ heading, subtext, button_text }: SectionProps) {
  if (!heading && !button_text) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem', backgroundColor: 'var(--color-primary)' }}>
      <div className="mx-auto text-center" style={{ maxWidth: '680px' }}>
        {heading && (
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', lineHeight: 1.15 }}
          >
            {heading}
          </h2>
        )}
        {subtext && (
          <p
            className="mb-8 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem' }}
          >
            {subtext}
          </p>
        )}
        {button_text && (
          <button
            className="inline-flex items-center font-semibold transition-transform duration-150 hover:scale-105 active:scale-100"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-text)',
              padding: '0.9375rem 2.75rem',
              borderRadius: 'var(--radius)',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            {button_text}
          </button>
        )}
      </div>
    </section>
  )
}
