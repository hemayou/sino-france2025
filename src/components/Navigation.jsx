import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const { currentAct, scrollToAct, acts } = useContext(AppContext)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-serif text-charcoal text-base font-semibold tracking-wide">
              从城市化迈向城市性
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {acts.map((act) => (
              <button
                key={act.id}
                onClick={() => scrollToAct(act.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  currentAct === act.id
                    ? 'bg-charcoal text-white shadow-lg'
                    : 'text-gray-500 hover:text-charcoal hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">{act.label}</span>
                <span className="ml-1.5 text-xs opacity-50 font-en">{act.subtitle}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-charcoal p-2">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-light border-t border-gray-200/50">
          <div className="px-4 py-3 space-y-1">
            {acts.map((act) => (
              <button
                key={act.id}
                onClick={() => { scrollToAct(act.id); setMobileOpen(false) }}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                  currentAct === act.id
                    ? 'bg-charcoal text-white'
                    : 'text-gray-500 hover:text-charcoal hover:bg-gray-100'
                }`}
              >
                <span>{act.label}</span>
                <span className="ml-2 text-xs opacity-50 font-en">{act.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
