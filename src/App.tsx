import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routesConfig from './config/routes.config.json'
import tokensConfig from './config/tokens.config.json'
import pagesConfig from './config/pages.config.json'
import AppShell from './components/AppShell'
import PageRenderer from './components/PageRenderer'
import type { PageConfig, SectionProps } from './types'

const pages = pagesConfig as Record<string, SectionProps[]>

// Flatten nested page tree into a single list of { id, path }
function flattenRoutes(nodes: PageConfig[]): { id: string; path: string }[] {
  const result: { id: string; path: string }[] = []
  for (const node of nodes) {
    result.push({ id: node.id, path: node.path })
    if (node.children?.length) {
      result.push(...flattenRoutes(node.children))
    }
  }
  return result
}

const flatRoutes = flattenRoutes(routesConfig.pages as PageConfig[])
const homeSections = pages[flatRoutes[0]?.id] ?? []

export default function App() {
  return (
    <BrowserRouter>
      <AppShell
        appName={routesConfig.app_name}
        navPages={routesConfig.pages as PageConfig[]}
        logoUrl={tokensConfig.logo_url}
      >
        <Routes>
          {flatRoutes.map(route => (
            <Route
              key={route.id}
              path={route.path}
              element={<PageRenderer sections={pages[route.id] ?? []} />}
            />
          ))}
          {/* 404 — fall back to home */}
          <Route path="*" element={<PageRenderer sections={homeSections} />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
