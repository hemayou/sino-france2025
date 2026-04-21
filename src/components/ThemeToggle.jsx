import { useContext } from 'react'
import { AppContext } from '../App'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(AppContext)

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-20 right-4 z-50 w-10 h-10 rounded-full glass-light flex items-center justify-center text-charcoal hover:text-gold transition-colors shadow-lg"
      title={darkMode ? '切换浅色模式' : '切换深色模式'}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
