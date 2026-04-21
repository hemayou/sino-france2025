import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeInSection from '../components/FadeInSection'
import InfoAccordion from '../components/InfoAccordion'
import ImageLightbox from '../components/ImageLightbox'
import KnowledgeGraph from '../components/KnowledgeGraph'
import CostComparisonTable from '../components/CostComparisonTable'
import { act2Intro, act2Themes } from '../data/act2-data'
import { Leaf, Compass, Home, RotateCcw, Trees, ImageIcon, Landmark, Map, Cloud, Briefcase } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const themeIcons = {
  eco: Leaf,
  arch: Compass,
  housing: Home,
  renewal: RotateCcw,
  'public-space': Trees,
  'admin': Landmark,
  'region': Map,
  'climate': Cloud,
  'internship': Briefcase,
}

function ThemeImageGallery({ images, onImageClick }) {
  if (!images || images.length === 0) return null
  const PREVIEW_COUNT = 8
  const showMore = images.length > PREVIEW_COUNT
  const previewImages = showMore ? images.slice(0, PREVIEW_COUNT) : images
  const remainingCount = images.length - PREVIEW_COUNT

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <ImageIcon size={16} className="text-gold" />
        <span className="text-gold/80 text-xs tracking-wider uppercase font-medium font-en">Photo Gallery</span>
      </div>
      <div className={`grid gap-3 ${images.length <= 2 ? 'grid-cols-2' : images.length <= 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
        {previewImages.map((img, i) => (
          <button key={i} onClick={() => onImageClick(images, i)} className="relative aspect-[4/3] overflow-hidden rounded-xl group shadow-sm bg-gray-100">
            <img src={img.src} alt={img.caption || ''} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</div>
            )}
          </button>
        ))}
        {showMore && (
          <button
            onClick={() => onImageClick(images, PREVIEW_COUNT)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group shadow-sm bg-charcoal flex items-center justify-center cursor-pointer hover:bg-charcoal/80 transition-colors"
          >
            <div className="text-center">
              <span className="text-white text-2xl font-display">+{remainingCount}</span>
              <span className="block text-white/60 text-xs mt-1">More</span>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

function PublicSpaceInsights({ insights }) {
  if (!insights || insights.length === 0) return null
  return (
    <div className="space-y-6">
      {insights.map((item, i) => (
        <FadeInSection key={i} delay={i * 0.1}>
          <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 overflow-hidden">
            {/* 左侧金色竖线 */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
            {/* 编号 */}
            <div className="flex items-start gap-4">
              <span className="text-3xl md:text-4xl font-display text-gold/30 font-bold leading-none">{item.num}</span>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-medium text-charcoal mb-3">{item.title}</h3>
                <p className="text-gold-dark text-base md:text-lg italic leading-relaxed mb-4 border-l-2 border-gold/30 pl-4">
                  "{item.quote}"
                </p>
                <p className="text-gray-600 text-base leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  )
}

export default function Act2_Learning() {
  const [activeTheme, setActiveTheme] = useState(0)
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 })
  const sectionRefs = useRef([])
  const navRef = useRef(null)

  useEffect(() => {
    sectionRefs.current.forEach((ref, i) => {
      if (!ref) return
      ScrollTrigger.create({
        trigger: ref,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveTheme(i),
        onEnterBack: () => setActiveTheme(i),
      })
    })
    return () => { ScrollTrigger.getAll().forEach(st => st.kill()) }
  }, [])

  const scrollToTheme = (index) => {
    const ref = sectionRefs.current[index]
    const nav = navRef.current
    if (!ref || !nav) return
    const refRect = ref.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()
    // 让主题区块顶部对齐到导航栏底部下方 16px 处
    const scrollDelta = refRect.top - navRect.bottom - 16
    const targetY = window.scrollY + scrollDelta
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' })
  }

  const openLightbox = (images, index) => setLightbox({ isOpen: true, images, index })

  return (
    <div className="bg-white relative">
      {/* ===== 开场 ===== */}
      <section className="min-h-[50vh] flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="text-center max-w-3xl">
          <FadeInSection>
            <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Act 02</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">{act2Intro.title}</h2>
            <div className="gold-line w-20 mx-auto mb-6" />
            <p className="font-en text-gray-500 text-sm tracking-[0.2em] uppercase mb-8">{act2Intro.subtitle}</p>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">{act2Intro.description}</p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== 知识图谱 ===== */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <FadeInSection className="text-center mb-10">
          <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-3">Knowledge Map</p>
          <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">学习主题全景</h3>
          <p className="text-gray-400 text-sm">点击节点可跳转至对应主题</p>
        </FadeInSection>
        <FadeInSection>
          <KnowledgeGraph onNodeClick={scrollToTheme} />
        </FadeInSection>
      </section>

      {/* ===== 主题导航（固定） ===== */}
      <div ref={navRef} className="sticky top-16 z-40 glass-light border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {act2Themes.map((theme, i) => {
              const Icon = themeIcons[theme.id] || Leaf
              return (
                <button key={theme.id} onClick={() => scrollToTheme(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm whitespace-nowrap transition-all ${activeTheme === i ? 'bg-charcoal text-white shadow-lg' : 'text-gray-500 hover:text-charcoal hover:bg-gray-100'}`}>
                  <Icon size={14} />
                  <span>{theme.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ===== 各主题内容 ===== */}
      <div className="max-w-7xl mx-auto">
        {act2Themes.map((theme, themeIndex) => (
          <section key={theme.id} ref={el => sectionRefs.current[themeIndex] = el}
            className="min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            {/* 两栏布局：左信息 + 右内容 */}
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              {/* 左侧固定信息 */}
              <div className="lg:col-span-2 lg:sticky lg:top-40 lg:self-start">
                <FadeInSection>
                  <div className="flex items-center gap-3 mb-5">
                    {(() => { const Icon = themeIcons[theme.id] || Leaf; return <Icon size={28} className="text-gold" /> })()}
                    <span className="badge badge-gold text-xs font-en">{theme.id.toUpperCase()}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3">{theme.title}</h2>
                  <p className="text-gold text-lg md:text-xl font-light mb-6 font-en">{theme.subtitle}</p>
                  <p className="text-gray-600 text-lg leading-relaxed">{theme.intro}</p>

                  {/* 案例卡片 */}
                  {theme.cases && theme.cases.length > 0 && (
                    <div className="mt-8 space-y-4">
                      {theme.cases.map((c, ci) => (
                        <div key={ci} className="paper-3d p-5">
                          <h4 className="font-medium text-charcoal text-lg mb-1">{c.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span>{c.location}</span>
                            {c.area && <span>{c.area}</span>}
                          </div>
                          <p className="text-gray-600 text-base mb-3">{c.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {c.highlights?.map((h, hi) => (
                              <span key={hi} className="text-xs px-3 py-1.5 bg-eco/10 text-eco rounded-full">{h}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </FadeInSection>
              </div>

              {/* 右侧滚动内容 */}
              <div className="lg:col-span-3">
                {theme.id === 'public-space' ? (
                  <PublicSpaceInsights insights={theme.insights} />
                ) : (
                  <InfoAccordion levels={theme.levels} />
                )}
              </div>
            </div>

            {/* 公共空间总结引言 */}
            {theme.id === 'public-space' && theme.conclusion && (
              <FadeInSection>
                <div className="mt-16 max-w-4xl mx-auto text-center">
                  <div className="gold-line w-16 mx-auto mb-8" />
                  <blockquote className="font-display text-xl md:text-2xl text-charcoal leading-relaxed italic">
                    "{theme.conclusion}"
                  </blockquote>
                  <p className="mt-6 text-gray-400 text-sm font-en tracking-wider">— 游鸿，巴黎观察手记</p>
                </div>
              </FadeInSection>
            )}

            {/* Photo Gallery：跨越全宽，放在两栏下方 */}
            <FadeInSection>
              <ThemeImageGallery images={theme.images} onImageClick={openLightbox} />
            </FadeInSection>

            {/* 巴黎大区生活成本对比表格 */}
            {theme.id === 'region' && (
              <FadeInSection>
                <CostComparisonTable />
              </FadeInSection>
            )}
          </section>
        ))}
      </div>

      <ImageLightbox
        images={lightbox.images}
        currentIndex={lightbox.index}
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        onPrev={() => setLightbox({ ...lightbox, index: Math.max(0, lightbox.index - 1) })}
        onNext={() => setLightbox({ ...lightbox, index: Math.min(lightbox.images.length - 1, lightbox.index + 1) })}
      />
    </div>
  )
}
