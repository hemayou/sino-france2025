import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FadeInSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.8,
  triggerStart = 'top 85%',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0
    const y = direction === 'up' ? distance : direction === 'down' ? -distance : 0

    gsap.set(el, { opacity: 0, x, y })

    const tween = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [delay, direction, distance, duration, triggerStart])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
