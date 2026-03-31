import type { SectionProps } from '../../types'

export default function TextBlock({ heading, subtext, button_text, image_url }: SectionProps) {
  if (!heading && !subtext) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div
        className={`mx-auto flex flex-col ${image_url ? 'md:flex-row items-center gap-12' : ''}`}
        style={{ maxWidth: 'var(--max-width)' }}
      >
        <div className="flex-1">
          {heading && (
            <h2
              className="font-bold mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--color-text)' }}
            >
              {heading}
            </h2>
          )}
          {subtext && (
            <p
              className="leading-relaxed mb-6"
              style={{ color: 'var(--color-text-muted)', fontSize: '1.0625rem', maxWidth: image_url ? undefined : '680px' }}
            >
              {subtext}
            </p>
          )}
          {button_text && (
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold transition-opacity duration-150 hover:opacity-80"
              style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9375rem' }}
              onClick={e => e.preventDefault()}
            >
              {button_text}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
        {image_url && (
          <div className="flex-1">
            <img
              src={image_url}
              alt={heading ?? ''}
              className="w-full"
              style={{ borderRadius: 'var(--radius)', boxShadow: '0 12px 40px rgba(0,0,0,0.10)' }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
