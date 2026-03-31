import type { SectionProps } from '../../types'

export default function Form({ heading, subtext, button_text, fields }: SectionProps) {
  if (!fields?.length && !heading) return null

  return (
    <section style={{ padding: 'var(--spacing-section) 1.5rem' }}>
      <div className="mx-auto" style={{ maxWidth: '560px' }}>
        {heading && (
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-text)' }}
          >
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            {subtext}
          </p>
        )}

        <div
          className="p-8 rounded-2xl space-y-5"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          {fields?.map((field, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <label
                className="text-sm font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                {field}
              </label>
              <input
                type="text"
                placeholder={`Enter ${field.toLowerCase()}`}
                className="w-full px-4 py-2.5 text-sm outline-none transition-colors duration-150"
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'calc(var(--radius) * 0.6)',
                  backgroundColor: 'var(--color-background)',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-body)',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(30,58,95,0.08)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
              />
            </div>
          ))}

          {button_text && (
            <button
              className="w-full font-semibold py-3 transition-opacity duration-150 hover:opacity-90 active:opacity-80 mt-2"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                borderRadius: 'calc(var(--radius) * 0.6)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9375rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              {button_text}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
