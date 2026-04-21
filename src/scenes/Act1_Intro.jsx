import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeInSection from '../components/FadeInSection'
import PhotoCollage from '../components/PhotoCollage'
import { projectOverview, background, timeline, institutions, themeIntro, surveyStats } from '../data/act1-data'
import { fieldworkPhotos } from '../data/fieldwork-data'
import { Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Act1_Intro() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const title = titleRef.current
    if (!hero || !title) return

    gsap.fromTo(hero.querySelector('.hero-bg'),
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: 'power2.out' }
    )

    gsap.fromTo(title.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: 'power3.out' }
    )

    const tlItems = timelineRef.current?.querySelectorAll('.timeline-item')
    if (tlItems) {
      tlItems.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            opacity: 1, x: 0, duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }
  }, [])

  // 将33张照片分成左右两组（交错分配，让两侧视觉更丰富）
  const leftPhotos = fieldworkPhotos.filter((_, i) => i % 2 === 0)
  const rightPhotos = fieldworkPhotos.filter((_, i) => i % 2 === 1)

  return (
    <div className="bg-white">
      {/* ===== Hero 开场 ===== */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="hero-bg absolute inset-0">
          {/* 巴黎全景背景图 */}
          <img
            src="/images/paris-hero.jpg"
            alt="Paris panorama"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          {/* 灰黑色遮罩 60-70% */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-gray-900/65 to-black/70" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
          </div>
        </div>

        <div ref={titleRef} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="font-en text-gold text-sm tracking-[0.3em] uppercase mb-6">
            {projectOverview.subtitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            {projectOverview.title}
          </h1>
          <p className="font-art text-white/60 text-lg md:text-xl mb-6">
            {projectOverview.description}
          </p>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="text-white/70 text-lg md:text-xl font-light tracking-wide">
            {projectOverview.author} · {projectOverview.organization}
          </p>
          <p className="text-gold/80 text-sm mt-4 tracking-wider font-en">
            {projectOverview.period} · {projectOverview.duration}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ===== 项目背景 ===== */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeInSection>
            <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Background</p>
            <h2 className="act-title mb-8">{background.title}</h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              {background.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="grid grid-cols-2 gap-5">
              {background.stats.map((stat, i) => (
                <div key={i} className="paper-3d p-8 text-center">
                  <div className="text-4xl md:text-5xl font-display text-charcoal mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gold text-sm font-medium tracking-wider uppercase font-en">{stat.unit}</div>
                  <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== 研修主题 ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <FadeInSection>
            <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Themes</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-10">{themeIntro.title}</h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            {/* 中文核心句 - 大字号宽面 */}
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed max-w-[80%] mx-auto mb-6">
              {themeIntro.description}
            </p>
            {/* 英文翻译 - Times New Roman 小字号 */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto italic"
               style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              {themeIntro.englishDescription}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== 40天行程时间线 + 照片拼贴墙 + 调研统计 ===== */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Timeline</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">40天行程</h2>
          <p className="text-gray-500 text-lg font-en tracking-wider">行走观察 · 事务所进修 · 系统调研</p>
        </FadeInSection>

        {/* 三栏等高布局：左侧照片墙 + 中间时间线 + 右侧照片墙 */}
        <div className="flex flex-col md:flex-row gap-[3px] items-stretch">
          {/* 左侧照片拼贴墙 - 仅桌面端显示，等高填充 */}
          <div className="hidden md:block md:w-[24%] h-full overflow-hidden rounded-lg">
            <PhotoCollage photos={leftPhotos} side="left" />
          </div>

          {/* 中间时间线 */}
          <div className="md:w-[52%] px-2 md:px-6">
            <div ref={timelineRef} className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30" />

              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`timeline-item relative flex items-start mb-16 md:mb-24 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-white z-10 mt-1.5" />

                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-xs rounded-full mb-2 font-en tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-medium text-charcoal mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧照片拼贴墙 - 仅桌面端显示，等高填充 */}
          <div className="hidden md:block md:w-[24%] h-full overflow-hidden rounded-lg">
            <PhotoCollage photos={rightPhotos} side="right" />
          </div>
        </div>

        {/* 移动端照片墙 */}
        <div className="md:hidden mt-12">
          <p className="font-en text-gold text-xs tracking-[0.2em] uppercase mb-4 text-center">Fieldwork Photos</p>
          <PhotoCollage photos={fieldworkPhotos} />
        </div>

        {/* 调研统计数据 */}
        <FadeInSection className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {surveyStats.map((stat, i) => (
              <div key={i} className="paper-3d p-6 text-center">
                <div className="text-3xl md:text-4xl font-display text-gold mb-1">{stat.value}</div>
                <div className="text-charcoal text-sm font-medium">{stat.label}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* ===== 研习机构 ===== */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Institutions</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">研习机构</h2>
          <p className="text-gray-500 text-lg font-en tracking-wider">6家规划与建筑设计企业</p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map((inst, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="paper-3d p-8 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 size={18} className="text-gold" />
                  <span className="badge badge-gold text-xs font-en">{inst.type}</span>
                </div>
                <h3 className="text-xl font-medium text-charcoal mb-2">{inst.name}</h3>
                <p className="text-gray-500 text-base mb-4">{inst.description}</p>
                <div className="text-sm text-eco font-medium">{inst.focus}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </div>
  )
}
