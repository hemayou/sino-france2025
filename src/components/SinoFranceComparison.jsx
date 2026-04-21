import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { sinoFranceIntro, comparisonThemes, sinoFranceClosing } from '../data/sino-france-data'
import { MapPin, ArrowLeft } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function ComparisonSlide({ theme, index }) {
  const panelRef = useRef(null)
  const maskRef = useRef(null)
  const dividerRef = useRef(null)
  const labelFrRef = useRef(null)
  const labelCnRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    const mask = maskRef.current
    const divider = dividerRef.current
    if (!panel || !mask || !divider) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: panel.parentElement, // 以外层 min-h-[200vh] 容器为触发器
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      }
    })

    // 中国内容遮罩层：从完全显示到完全隐藏（从右侧向左裁剪）
    tl.fromTo(mask,
      { clipPath: 'inset(0 0% 0 0)' },
      { clipPath: 'inset(0 100% 0 0)', ease: 'none' },
      0
    )

    // 分隔线：跟随中国内容被裁剪后的右边界，从右向左移动
    // left: 100% → 0% 表示分隔线从视口右边缘移动到左边缘
    tl.fromTo(divider,
      { left: '100%' },
      { left: '0%', ease: 'none' },
      0
    )

    // 标签透明度变化
    if (labelFrRef.current) {
      tl.fromTo(labelFrRef.current,
        { opacity: 0.3 },
        { opacity: 1, ease: 'none' },
        0
      )
    }
    if (labelCnRef.current) {
      tl.fromTo(labelCnRef.current,
        { opacity: 1 },
        { opacity: 0.3, ease: 'none' },
        0
      )
    }

    return () => { tl.kill() }
  }, [])

  return (
    <div className="relative min-h-[200vh]">
      {/* Sticky 面板：固定在视口内滚动 */}
      <div ref={panelRef} className="sticky top-0 h-screen w-full overflow-hidden bg-charcoal">
        {/* 编号和主题标题 */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-8 pb-4 px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-1">Comparison {String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-2xl md:text-3xl text-white">{theme.title}</h3>
              <p className="font-en text-white/40 text-sm mt-1">{theme.englishTitle}</p>
            </div>
            <p className="font-art text-white/50 text-base md:text-lg max-w-md text-right hidden md:block">
              {theme.themeQuestion}
            </p>
          </div>
        </div>

        {/* 底层：法国语境 */}
        <div className="absolute inset-0">
          <div className="h-full w-full flex flex-col md:flex-row">
            {/* 法国图片区 */}
            <div className="w-full md:w-3/5 h-[45vh] md:h-full relative">
              {theme.french.images[0] && (
                <img src={theme.french.images[0].src} alt={theme.french.images[0].caption}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
            </div>
            {/* 法国文字区 */}
            <div className="w-full md:w-2/5 h-[55vh] md:h-full flex items-center justify-center p-6 md:p-10">
              <div className="max-w-md">
                <div ref={labelFrRef} className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-gold" />
                  <span className="font-en text-gold text-xs tracking-[0.2em] uppercase">France Context</span>
                </div>
                <h4 className="font-display text-xl md:text-2xl text-white mb-4">{theme.french.context}</h4>
                <p className="text-white/70 text-base leading-relaxed mb-6">{theme.french.description}</p>
                {theme.french.images.length > 1 && (
                  <div className={`grid gap-2 ${(() => {
                    const count = theme.french.images.length - 1
                    if (count === 3) return 'grid-cols-3'
                    if (count === 4) return 'grid-cols-2'
                    return 'grid-cols-2 md:grid-cols-3'
                  })()}`}>
                    {theme.french.images.slice(1).map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img src={img.src} alt={img.caption} className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = 'none' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 上层：中国语境（通过 clip-path 控制显示区域） */}
        <div ref={maskRef} className="absolute inset-0 bg-charcoal" style={{ clipPath: 'inset(0 0% 0 0)' }}>
          <div className="h-full w-full flex flex-col md:flex-row">
            {/* 中国图片区 */}
            <div className="w-full md:w-3/5 h-[45vh] md:h-full relative">
              {theme.chinese.images[0] && (
                <img src={theme.chinese.images[0].src} alt={theme.chinese.images[0].caption}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>
            {/* 中国文字区 */}
            <div className="w-full md:w-2/5 h-[55vh] md:h-full flex items-center justify-center p-6 md:p-10 bg-black">
              <div className="max-w-md">
                <div ref={labelCnRef} className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-gold" />
                  <span className="font-en text-gold text-xs tracking-[0.2em] uppercase">China Context</span>
                </div>
                <h4 className="font-display text-xl md:text-2xl text-white mb-4">{theme.chinese.context}</h4>
                <p className="text-white/70 text-base leading-relaxed mb-6">{theme.chinese.description}</p>
                {theme.chinese.cases.length > 0 && (
                  <div className="space-y-3">
                    {theme.chinese.cases.map((c, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">{c.name}</p>
                          <p className="text-white/50 text-xs">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 分隔线 + 向左箭头：跟随中国内容被裁剪后的右边界，从右向左移动 */}
        <div ref={dividerRef} className="absolute top-0 bottom-0 w-[3px] bg-gold z-20 shadow-[0_0_20px_rgba(212,165,116,0.5)]"
          style={{ left: '100%' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg">
            <ArrowLeft size={18} className="text-charcoal" />
          </div>
        </div>

        {/* 底部反思 */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-8">
          <div className="glass-dark rounded-xl p-4 md:p-5 max-w-3xl mx-auto">
            <p className="font-art text-white/80 text-sm md:text-base leading-relaxed text-center">
              {theme.reflection}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SinoFranceComparison() {
  return (
    <section id="sino-france" className="bg-black">
      {/* 开场 */}
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-3xl">
          <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Sino-French Observation</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">{sinoFranceIntro.title}</h2>
          <div className="gold-line w-20 mx-auto mb-6" />
          <p className="font-art text-white/60 text-lg md:text-xl leading-relaxed">{sinoFranceIntro.subtitle}</p>
          <p className="text-white/40 text-base mt-6 leading-relaxed">{sinoFranceIntro.description}</p>
        </div>
      </div>

      {/* 推拉窗对比 */}
      {comparisonThemes.map((theme, i) => (
        <ComparisonSlide key={theme.id} theme={theme} index={i} />
      ))}

      {/* 结语 */}
      <div className="min-h-[40vh] flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-3xl">
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="font-art text-white/70 text-lg md:text-xl leading-relaxed mb-6">
            "{sinoFranceClosing.text}"
          </p>
          <p className="font-display text-gold text-xl md:text-2xl">
            {sinoFranceClosing.question}
          </p>
          <div className="gold-line w-16 mx-auto mt-8" />
        </div>
      </div>
    </section>
  )
}
