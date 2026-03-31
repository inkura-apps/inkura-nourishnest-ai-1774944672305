import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import type { PageConfig } from '../types'

interface Props {
  appName: string
  navPages: PageConfig[]
  logoUrl: string | null
  children: React.ReactNode
}

function DropdownItem({ page }: { page: PageConfig }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
        style={{ color: 'var(--color-text)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-background)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        {page.name}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.5, transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 py-1 rounded-xl shadow-lg z-50 min-w-[160px]"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          <NavLink
            to={page.path}
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm transition-colors duration-100"
            style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none', fontWeight: isActive ? 600 : 400 })}
          >
            {page.name} (overview)
          </NavLink>
          {page.children?.map(child => (
            <NavLink
              key={child.id}
              to={child.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm transition-colors duration-100"
              style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none', fontWeight: isActive ? 600 : 400 })}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-background)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {child.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AppShell({ appName, navPages, logoUrl, children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div style={{ fontFamily: 'var(--font-body)', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
      {/* Sticky header */}
      <header
        className="sticky top-0 z-40"
        style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div
          className="mx-auto flex items-center justify-between h-16 px-6"
          style={{ maxWidth: 'var(--max-width)' }}
        >
          {/* Brand */}
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            {logoUrl ? (
              <img src={logoUrl} alt={appName} style={{ maxHeight: '40px', width: 'auto' }} />
            ) : (
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
              >
                {appName}
              </span>
            )}
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navPages.map(page =>
              page.children?.length ? (
                <DropdownItem key={page.id} page={page} />
              ) : (
                <NavLink
                  key={page.id}
                  to={page.path}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                    backgroundColor: isActive ? 'var(--color-background)' : 'transparent',
                    textDecoration: 'none',
                    fontWeight: isActive ? 600 : 500,
                  })}
                >
                  {page.name}
                </NavLink>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)' }}
          >
            <span className="block w-5 h-0.5" style={{ backgroundColor: 'var(--color-text)', transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: 'var(--color-text)', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: 'var(--color-text)', transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t px-6 py-4 space-y-1"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
          >
            {navPages.map(page => (
              <div key={page.id}>
                <NavLink
                  to={page.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium"
                  style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none', fontWeight: 500 })}
                >
                  {page.name}
                </NavLink>
                {page.children?.map(child => (
                  <NavLink
                    key={child.id}
                    to={child.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-1.5 ml-4 text-sm rounded-lg"
                    style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)', textDecoration: 'none' })}
                  >
                    {child.name}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Page content */}
      {children}
    </div>
  )
}
