import type { SectionProps } from '../../types'

export default function Hero({ heading, subtext, button_text, image_url }: SectionProps) {
  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{ padding: 'var(--spacing-section) 1.5rem', minHeight: button_text ? '60vh' : undefined }}
    >
      <div
        className="mx-auto w-full text-center"
        style={{ maxWidth: 'var(--max-width)' }}
      >
        {heading && (
          <h1
            className="font-extrabold leading-tight tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
            }}
          >
            {heading}
          </h1>
        )}
        {subtext && (
          <p
            className="mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '620px',
              marginBottom: button_text ? '2.5rem' : 0,
            }}
          >
            {subtext}
          </p>
        )}
        {button_text && (
          <button
            className="inline-flex items-center font-semibold transition-opacity duration-150 hover:opacity-90 active:opacity-80"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              padding: '0.875rem 2.5rem',
              borderRadius: 'var(--radius)',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            }}
          >
            {button_text}
          </button>
        )}
        {image_url && (
          <div style={{ marginTop: '4rem' }}>
            <img
              src={image_url}
              alt={heading ?? ''}
              className="mx-auto w-full"
              style={{
                maxWidth: '800px',
                borderRadius: 'var(--radius)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
