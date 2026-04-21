import { useRef, useEffect, useState, useCallback, useContext } from 'react'
import { AppContext } from '../App'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { act3Intro, act3Prologue, questions, act3Closing } from '../data/act3-data'
import { ChevronLeft, ChevronRight, ImageIcon, ChevronDown } from 'lucide-react'
import ImageLightbox from '../components/ImageLightbox'

gsap.registerPlugin(ScrollTrigger)

// 子追问：横向并列折叠面板
function SubQuestionTabs({ items }) {
  const [openIndex, setOpenIndex] = useState(-1)
  if (!items || items.length === 0) return null

  return (
    <div className="mt-8">
      <h4 className="font-en text-gold text-xs tracking-[0.2em] uppercase mb-4">Further Questions</h4>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`snap-start flex-shrink-0 rounded-xl border transition-all duration-500 overflow-hidden ${
                isOpen ? 'w-full md:w-[480px] bg-white border-gray-200 shadow-sm' : 'w-[280px] md:w-[320px] bg-white/80 border-gray-100 hover:border-gold/30 cursor-pointer'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className={`pr-3 transition-all duration-300 ${isOpen ? 'text-charcoal text-lg md:text-xl font-medium' : 'text-charcoal text-base md:text-lg font-medium line-clamp-2'}`}>
                  {item.title}
                </span>
                <ChevronDown size={20} className={`text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// 图片画廊：3张+More模式
function ImageGallery({ images, onImageClick }) {
  if (!images || images.length === 0) return null
  const PREVIEW_COUNT = 3
  const showMore = images.length > PREVIEW_COUNT
  const previewImages = showMore ? images.slice(0, PREVIEW_COUNT) : images
  const remainingCount = images.length - PREVIEW_COUNT

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <ImageIcon size={16} className="text-gold" />
        <span className="text-gold/80 text-xs tracking-wider uppercase font-medium font-en">Scene Photos</span>
      </div>
      <div className="flex gap-3">
        {previewImages.map((img, i) => (
          <button key={i} onClick={() => onImageClick(images, i)}
            className="relative flex-1 aspect-[4/3] max-w-[280px] overflow-hidden rounded-xl group bg-gray-100 shadow-md">
            <img src={img.src} alt={img.caption || ''}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"
              onError={(e) => { e.target.parentElement.style.display = 'none' }} />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {img.caption}
              </div>
            )}
          </button>
        ))}
        {showMore && (
          <button
            onClick={() => onImageClick(images, PREVIEW_COUNT)}
            className="relative flex-1 aspect-[4/3] max-w-[120px] overflow-hidden rounded-xl bg-charcoal flex items-center justify-center cursor-pointer hover:bg-charcoal/80 transition-colors shadow-md"
          >
            <div className="text-center">
              <span className="text-white text-xl font-display">+{remainingCount}</span>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

// 引言区：沉浸式暗色调呈现
function PrologueSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const elements = content.querySelectorAll('.prologue-animate')

    gsap.fromTo(elements,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => { ScrollTrigger.getAll().forEach(st => st.kill()) }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* 底层大图 */}
      <div className="absolute inset-0">
        <img
          src={act3Prologue.backgroundImage}
          alt="Coulée verte René-Dumont"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      {/* 50%黑色半透明遮罩 */}
      <div className="absolute inset-0 bg-black/50" />
      {/* 渐变遮罩增强底部可读性 */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" />

      {/* 内容 */}
      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 text-center">
        <p className="prologue-animate font-en text-gold text-xs tracking-[0.3em] uppercase mb-6">
          {act3Prologue.englishTitle}
        </p>
        <h2 className="prologue-animate font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          {act3Prologue.title}
        </h2>
        <p className="prologue-animate font-art text-white/60 text-base md:text-lg mb-16">
          {act3Prologue.subtitle}
        </p>

        {/* 三个层次的文字 */}
        <div className="space-y-12 text-left">
          <div className="prologue-animate">
            <h3 className="font-en text-gold text-xs tracking-[0.2em] uppercase mb-4">Scene</h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              {act3Prologue.scene.description}
            </p>
          </div>

          <div className="prologue-animate border-l-2 border-gold/40 pl-6">
            <h3 className="font-en text-gold text-xs tracking-[0.2em] uppercase mb-4">Confusion</h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed italic">
              {act3Prologue.theme}
            </p>
          </div>

          <div className="prologue-animate border-l-2 border-gold/40 pl-6">
            <h3 className="font-en text-gold text-xs tracking-[0.2em] uppercase mb-4">Inside</h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              {act3Prologue.confusion}
            </p>
          </div>
        </div>

        {/* 核心追问句 */}
        <div className="prologue-animate mt-16 pt-8 border-t border-white/10">
          <blockquote className="font-art text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed">
            "{act3Prologue.insight}"
          </blockquote>
        </div>

        {/* 向下滚动提示 */}
        <div className="prologue-animate mt-16 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-wider font-en">Scroll to explore</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

// 追问区开场：探索式、渐进式导言
function Act3IntroSection({ currentSlide, onGoToSlide }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const elements = section.querySelectorAll('.intro-animate')
    gsap.fromTo(elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => { ScrollTrigger.getAll().forEach(st => st.kill()) }
  }, [])

  return (
    <div ref={sectionRef} className="py-16 md:py-24 px-4 text-center">
      <p className="intro-animate font-en text-gold text-sm tracking-[0.3em] uppercase mb-3">
        {act3Intro.subtitle}
      </p>
      <h2 className="intro-animate font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-12">
        {act3Intro.title}
      </h2>

      {/* 导言段落：探索式渐进呈现 */}
      <div className="max-w-3xl mx-auto text-left space-y-8 mb-12">
        {act3Intro.paragraphs.map((para, i) => (
          <p
            key={i}
            className={`intro-animate text-gray-600 text-base md:text-lg leading-relaxed ${
              i === 0 ? 'font-medium text-charcoal text-lg md:text-xl' : ''
            } ${i === act3Intro.paragraphs.length - 1 ? 'border-l-2 border-gold/30 pl-6 italic' : ''}`}
          >
            {para}
          </p>
        ))}
      </div>

      {/* 指示器 */}
      <div className="intro-animate flex items-center justify-center gap-3">
        {questions.map((_, i) => (
          <button key={i} onClick={() => onGoToSlide(i)}
            className={`transition-all duration-500 ${i === currentSlide ? 'w-8 h-2.5 bg-gold rounded-full' : 'w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400'}`} />
        ))}
      </div>
    </div>
  )
}

export default function Act3_Questions() {
  const scrollRef = useRef(null)
  const questionsSectionRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 })
  const { currentAct } = useContext(AppContext)
  const isInAct3 = currentAct === 'act3'
  const totalSlides = questions.length

  const goToSlide = useCallback((index) => {
    if (index < 0 || index >= totalSlides) return
    const container = scrollRef.current
    if (!container) return
    container.scrollTo({ left: index * container.clientWidth, behavior: 'smooth' })
    setCurrentSlide(index)
    // 切换后将页面垂直滚动到横向滑动容器顶部，确保新 slide 的标题可见
    setTimeout(() => {
      const containerRect = container.getBoundingClientRect()
      const targetY = window.scrollY + containerRect.top - 80
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' })
    }, 100)
  }, [totalSlides])

  const nextSlide = () => goToSlide(currentSlide + 1)
  const prevSlide = () => goToSlide(currentSlide - 1)

  // 监听滚动位置更新当前 slide
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const newIndex = Math.round(container.scrollLeft / container.clientWidth)
      if (newIndex !== currentSlide && newIndex >= 0 && newIndex < totalSlides) {
        setCurrentSlide(newIndex)
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [currentSlide, totalSlides])

  // 键盘导航：只在 act3 区域响应
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isInAct3) return
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, isInAct3])

  const openLightbox = (images, index) => setLightbox({ isOpen: true, images, index })

  return (
    <section id="act3" className="relative">
      {/* ===== 引言：沉浸式暗色调 ===== */}
      <PrologueSection />

      {/* ===== 追问与思考：左右切换 ===== */}
      <div ref={questionsSectionRef} className="relative bg-gray-50">
        {/* 开场标题区 */}
        <Act3IntroSection currentSlide={currentSlide} onGoToSlide={goToSlide} />

        {/* 横向滑动容器 - CSS scroll-snap */}
        <div className="relative">
          {/* 左右箭头：只在 act3 区域显示，用 scale 避免 disabled 与 opacity 冲突 */}
          <button onClick={prevSlide} disabled={currentSlide === 0}
            className={`fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-charcoal hover:text-gold hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 ${isInAct3 ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}`}>
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1}
            className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-charcoal hover:text-gold hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 ${isInAct3 ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}`}>
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {questions.map((q, i) => (
              <div key={q.id} className="snap-start min-w-full w-full flex-shrink-0 px-6 md:px-20 lg:px-28 pb-20">
                <div className="max-w-4xl mx-auto">

                  {/* ===== 追问编号和标题（居中布局） ===== */}
                  <div className="mb-10 text-center">
                    <span className="font-en text-6xl md:text-8xl font-bold text-gold/20 leading-none select-none block mb-2">
                      {q.number}
                    </span>
                    <p className="font-en text-gold text-sm tracking-[0.25em] uppercase mb-3">
                      {q.englishTitle || q.subtitle}
                    </p>
                    <h3 className="font-display text-4xl md:text-6xl font-bold text-charcoal mb-3">
                      {q.title}
                    </h3>
                    <p className="text-gray-400 text-lg md:text-xl font-art">{q.subtitle}</p>
                  </div>

                  {/* ===== 场景描述 ===== */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span className="text-charcoal text-sm font-medium">场景</span>
                      <span className="text-gold text-xs tracking-wider uppercase font-medium font-en">Scene</span>
                      <span className="text-gray-300 text-xs">—</span>
                      <span className="text-gray-500 text-xs">{q.scene.location}</span>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">{q.scene.description}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{q.scene.details}</p>
                  </div>

                  {/* ===== 图片画廊（3张+More） ===== */}
                  <ImageGallery images={q.images} onImageClick={openLightbox} />

                  {/* ===== 困惑与洞察 ===== */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-charcoal text-sm font-medium">困惑</span>
                        <span className="font-en text-question text-xs tracking-[0.2em] uppercase">Confusion</span>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">{q.reflection['困惑']}</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-charcoal text-sm font-medium">洞察</span>
                        <span className="font-en text-eco text-xs tracking-[0.2em] uppercase">Insight</span>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">{q.reflection.insight}</p>
                    </div>
                  </div>

                  {/* ===== 子追问：横向并列折叠 ===== */}
                  <SubQuestionTabs items={q.subQuestions} />

                  {/* ===== 核心追问句 ===== */}
                  <div className="text-center py-12 md:py-16">
                    <div className="gold-line w-16 mx-auto mb-8" />
                    <blockquote className="font-art text-xl md:text-2xl lg:text-3xl text-charcoal/90 leading-relaxed max-w-3xl mx-auto">
                      "{q.coreQuestion}"
                    </blockquote>
                    <div className="gold-line w-16 mx-auto mt-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 底部计数器 */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            <span className="font-en text-gold text-sm">{String(currentSlide + 1).padStart(2, '0')}</span>
            <div className="w-16 h-[2px] bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gold transition-all duration-500" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }} />
            </div>
            <span className="font-en text-gray-400 text-sm">{String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>

        {/* 结语 */}
        <div className="py-20 md:py-28 px-4 text-center bg-white">
          <div className="gold-line w-20 mx-auto mb-8" />
          <blockquote className="font-art text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
            "{act3Closing.text}"
          </blockquote>
          <p className="font-en text-gray-400 text-sm tracking-wider">— {act3Closing.author}</p>
        </div>
      </div>

      <ImageLightbox
        images={lightbox.images}
        currentIndex={lightbox.index}
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        onPrev={() => setLightbox({ ...lightbox, index: Math.max(0, lightbox.index - 1) })}
        onNext={() => setLightbox({ ...lightbox, index: Math.min(lightbox.images.length - 1, lightbox.index + 1) })}
      />
    </section>
  )
}
