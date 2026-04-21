import { useState, useEffect } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])

  const toggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-20 right-16 z-50 w-10 h-10 rounded-full glass-light flex items-center justify-center text-charcoal hover:text-gold transition-colors shadow-lg"
      title={isFullscreen ? '退出全屏' : '全屏显示'}
    >
      {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
    </button>
  )
}
