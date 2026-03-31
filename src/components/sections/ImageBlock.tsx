import type { SectionProps } from '../../types'

export default function ImageBlock({ heading, subtext, image_url }: SectionProps) {
  if (!image_url) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div className="mx-auto text-center" style={{ maxWidth: '860px' }}>
        <img
          src={image_url}
          alt={heading ?? ''}
          className="w-full mx-auto"
          style={{ borderRadius: 'var(--radius)', boxShadow: '0 12px 40px rgba(0,0,0,0.10)' }}
        />
        {(heading || subtext) && (
          <div className="mt-5">
            {heading && (
              <p className="font-medium" style={{ color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                {heading}
              </p>
            )}
            {subtext && (
              <p className="mt-1 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {subtext}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
