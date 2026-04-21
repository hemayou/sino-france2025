import FadeInSection from './FadeInSection'

export default function SectionHeader({ number, title, subtitle, color = 'primary' }) {
  const colorClasses = {
    primary: 'text-primary',
    eco: 'text-eco',
    question: 'text-question',
    accent: 'text-accent',
  }

  return (
    <FadeInSection className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-4">
        <span className={`font-serif text-4xl md:text-5xl font-bold ${colorClasses[color] || colorClasses.primary}`}>
          {number}
        </span>
        <div className="gold-line flex-1" />
      </div>
      <h2 className="act-title">{title}</h2>
      {subtitle && <p className="act-subtitle">{subtitle}</p>}
    </FadeInSection>
  )
}
