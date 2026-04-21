import { useContext } from 'react'
import { AppContext } from '../App'

export default function ScrollProgress() {
  const { scrollProgress } = useContext(AppContext)

  return (
    <div className="fixed top-16 left-0 right-0 z-50 h-[2px] bg-gray-200/30">
      <div
        className="h-full transition-all duration-150 ease-out bg-gold"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
