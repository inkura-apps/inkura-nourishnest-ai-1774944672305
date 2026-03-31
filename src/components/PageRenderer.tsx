import Hero from './sections/Hero'
import Nav from './sections/Nav'
import Form from './sections/Form'
import CardGrid from './sections/CardGrid'
import List from './sections/List'
import TextBlock from './sections/TextBlock'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import ImageBlock from './sections/ImageBlock'
import Chart from './sections/Chart'
import type { SectionProps } from '../types'

const sectionMap: Record<string, React.FC<SectionProps>> = {
  hero: Hero,
  nav: Nav,
  form: Form,
  card_grid: CardGrid,
  list: List,
  text: TextBlock,
  cta: CTA,
  footer: Footer,
  stats: Stats,
  testimonials: Testimonials,
  pricing: Pricing,
  image: ImageBlock,
  chart: Chart,
}

// Alternating section backgrounds — odd → background, even → surface
// CTA and Footer manage their own backgrounds
const selfBackgroundTypes = new Set(['cta', 'footer'])

interface Props {
  sections: SectionProps[]
}

export default function PageRenderer({ sections }: Props) {
  return (
    <div>
      {sections.map((section, index) => {
        const Component = sectionMap[section.type ?? '']
        if (!Component) return null

        const hasSelfBg = selfBackgroundTypes.has(section.type ?? '')
        const alternateBg = index % 2 === 0 ? 'var(--color-background)' : 'var(--color-surface)'
        const bg = section.styles?.background ?? (hasSelfBg ? undefined : alternateBg)

        return (
          <div key={index} style={bg ? { backgroundColor: bg } : undefined}>
            <Component {...section} />
          </div>
        )
      })}
    </div>
  )
}
