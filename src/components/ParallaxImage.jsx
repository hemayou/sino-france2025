import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxImage({
  src,
  alt = '',
  caption,
  className = '',
  speed = 0.5,
  height = '60vh',
  onClick,
}) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return

    const yMove = (speed) * 100

    const tween = gsap.to(image, {
      y: yMove,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [speed])

  return (
    <div
      ref={containerRef}
      className={`image-container overflow-hidden ${className}`}
      style={{ height }}
      onClick={onClick}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
        style={{ transform: 'translateY(-10%)' }}
        loading="lazy"
      />
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  )
}
