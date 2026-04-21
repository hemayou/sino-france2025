import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from './FadeInSection'

export default function InfoAccordion({ levels, className = '' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={`space-y-3 ${className}`}>
      {levels.map((level, i) => (
        <FadeInSection key={i} delay={i * 0.1}>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-primary/5">
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-bg-warm transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent text-sm font-medium flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="font-medium text-primary">{level.title}</span>
              </div>
              <ChevronDown
                size={18}
                className={`text-text-light transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 pt-0">
                <div className="pl-10 text-text leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {level.content}
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  )
}
