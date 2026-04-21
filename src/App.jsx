import { useState, useEffect, useRef, createContext } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import ThemeToggle from './components/ThemeToggle'
import FullscreenToggle from './components/FullscreenToggle'
import Act1_Intro from './scenes/Act1_Intro'
import Act2_Learning from './scenes/Act2_Learning'
import SinoFranceComparison from './components/SinoFranceComparison'
import Act3_Questions from './scenes/Act3_Questions'
import Act4_Epilogue from './scenes/Act4_Epilogue'

// 全局上下文：当前幕、滚动进度、主题模式
export const AppContext = createContext()

const ACTS = [
  { id: 'act1', label: '项目简介', subtitle: 'Introduction' },
  { id: 'act2', label: '学习交流', subtitle: 'Learning' },
  { id: 'sino-france', label: '中法对比', subtitle: 'Comparison' },
  { id: 'act3', label: '追问与思考', subtitle: 'Questions' },
  { id: 'act4', label: '尾声与展望', subtitle: 'Epilogue' },
]

function App() {
  const [currentAct, setCurrentAct] = useState('act1')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // 初始化主题
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)

      const actElements = ACTS.map(act => ({
        id: act.id,
        element: document.getElementById(act.id),
      })).filter(item => item.element)

      for (let i = actElements.length - 1; i >= 0; i--) {
        const rect = actElements[i].element.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.5) {
          setCurrentAct(actElements[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAct = (actId) => {
    const element = document.getElementById(actId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AppContext.Provider value={{ currentAct, scrollProgress, scrollToAct, acts: ACTS, darkMode, setDarkMode }}>
      <div ref={containerRef} className={`app-container ${darkMode ? 'dark' : ''}`}>
        <Navigation />
        <ScrollProgress />
        <ThemeToggle />
        <FullscreenToggle />

        <section id="act1">
          <Act1_Intro />
        </section>

        <section id="act2">
          <Act2_Learning />
        </section>

        <section id="sino-france">
          <SinoFranceComparison />
        </section>

        <section id="act3">
          <Act3_Questions />
        </section>

        <section id="act4">
          <Act4_Epilogue />
        </section>
      </div>
    </AppContext.Provider>
  )
}

export default App
