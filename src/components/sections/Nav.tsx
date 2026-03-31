import type { SectionProps } from '../../types'

// Inline sub-nav (for use within page content, separate from the AppShell header)
export default function Nav({ heading, items }: SectionProps) {
  if (!items?.length && !heading) return null

  return (
    <nav
      className="mx-auto flex items-center flex-wrap gap-2 px-6 py-4"
      style={{ maxWidth: 'var(--max-width)', borderBottom: '1px solid var(--color-border)' }}
    >
      {heading && (
        <span
          className="font-bold mr-4"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '1rem' }}
        >
          {heading}
        </span>
      )}
      {items?.map((item, i) => (
        <a
          key={i}
          href="#"
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150"
          style={{
            color: i === 0 ? 'var(--color-surface)' : 'var(--color-text)',
            backgroundColor: i === 0 ? 'var(--color-primary)' : 'transparent',
            border: '1px solid var(--color-border)',
            textDecoration: 'none',
          }}
          onClick={e => e.preventDefault()}
        >
          {item}
        </a>
      ))}
    </nav>
  )
}
