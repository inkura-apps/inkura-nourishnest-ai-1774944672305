import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import tokens from './config/tokens.config.json'
import './styles/tokens.css'

// Apply design tokens synchronously before first render to avoid flash
const root = document.documentElement
root.style.setProperty('--color-primary', tokens.palette.primary)
root.style.setProperty('--color-secondary', tokens.palette.secondary)
root.style.setProperty('--color-accent', tokens.palette.accent)
root.style.setProperty('--color-background', tokens.palette.background)
root.style.setProperty('--color-text', tokens.palette.text)
root.style.setProperty('--color-text-muted', tokens.palette.text_muted)
root.style.setProperty('--color-surface', tokens.palette.surface)
root.style.setProperty('--color-border', tokens.palette.border)
root.style.setProperty('--font-heading', `'${tokens.fonts.heading}', sans-serif`)
root.style.setProperty('--font-body', `'${tokens.fonts.body}', sans-serif`)
root.style.setProperty('--spacing-section', tokens.density.section_padding)
root.style.setProperty('--spacing-element', tokens.density.element_gap)
root.style.setProperty('--radius', tokens.density.border_radius)
root.style.setProperty('--max-width', tokens.density.container_max_width)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
