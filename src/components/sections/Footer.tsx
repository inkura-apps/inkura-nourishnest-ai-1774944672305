import type { SectionProps } from '../../types'

export default function Footer({ heading, subtext, items }: SectionProps) {
  return (
    <footer style={{ backgroundColor: 'var(--color-text)', color: 'rgba(255,255,255,0.9)', padding: '3rem 1.5rem' }}>
      <div
        className="mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ maxWidth: 'var(--max-width)' }}
      >
        <div>
          {heading && (
            <p
              className="font-bold text-lg mb-1"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}
            >
              {heading}
            </p>
          )}
          {subtext && (
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {subtext}
            </p>
          )}
        </div>
        {items?.length ? (
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-end">
            {items.map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-sm transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onClick={e => e.preventDefault()}
              >
                {item}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </footer>
  )
}
