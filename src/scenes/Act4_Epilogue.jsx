import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeInSection from '../components/FadeInSection'
import { act4Intro, echoSection, reflectionQuestions, futureOutlook, closingWords } from '../data/act4-data'
import { BookOpen, Users, Plane, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const sectionIcons = {
  深研究: BookOpen,
  请进来: Users,
  走出去: Plane,
}

export default function Act4_Epilogue() {
  const [currentEcho, setCurrentEcho] = useState(0)
  const echoIntervalRef = useRef(null)
  const echoRef = useRef(null)

  useEffect(() => {
    echoIntervalRef.current = setInterval(() => {
      setCurrentEcho(prev => (prev + 1) % echoSection.echoes.length)
    }, 5400)
    return () => { if (echoIntervalRef.current) clearInterval(echoIntervalRef.current) }
  }, [])

  useEffect(() => {
    if (echoRef.current) {
      gsap.fromTo(echoRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      )
    }
  }, [currentEcho])

  return (
    <div className="bg-white">
      {/* ===== 开场 ===== */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-24 bg-gray-50">
        <div className="text-center max-w-3xl">
          <FadeInSection>
            <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Act 04</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">{act4Intro.title}</h2>
            <div className="gold-line w-20 mx-auto mb-6" />
            <p className="font-en text-gray-500 text-sm tracking-[0.2em] uppercase">{act4Intro.subtitle}</p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== 平行世界的回响 ===== */}
      <section className="py-24 md:py-36 px-4 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/20 via-transparent to-gold/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection className="text-center mb-16">
            <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Echoes</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              {echoSection.title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              {echoSection.description}
            </p>
          </FadeInSection>

          <div className="min-h-[400px] md:min-h-[500px] flex items-center justify-center px-4">
            <div ref={echoRef} className="text-center max-w-4xl">
              <p className="text-gold text-sm md:text-base tracking-wider uppercase mb-8 font-en">
                {echoSection.echoes[currentEcho].question}
              </p>
              <blockquote className="font-art text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed">
                "{echoSection.echoes[currentEcho].quote}"
              </blockquote>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {echoSection.echoes.map((_, i) => (
              <button key={i} onClick={() => setCurrentEcho(i)}
                className={`h-2 rounded-full transition-all ${i === currentEcho ? 'bg-gold w-10' : 'bg-white/20 w-2 hover:bg-white/40'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 我们的选择 ===== */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Choices</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            {reflectionQuestions.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            {reflectionQuestions.description}
          </p>
        </FadeInSection>

        <div className="space-y-8">
          {reflectionQuestions.choices.map((choice, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <div className="paper-3d p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-charcoal text-white rounded-lg text-sm font-medium">
                      {choice.label}
                    </span>
                    <ArrowRight size={18} className="text-gold hidden md:block" />
                    <span className="px-4 py-2 bg-gold/10 text-gold-dark rounded-lg text-sm font-medium">
                      {choice.alternative}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {choice.question}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== 未来工作建议 ===== */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Outlook</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-2">
              {futureOutlook.title}
            </h2>
            <p className="text-gold text-lg font-en tracking-wider">{futureOutlook.subtitle}</p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {futureOutlook.sections.map((section, i) => {
              const Icon = sectionIcons[section.title] || BookOpen
              return (
                <FadeInSection key={i} delay={i * 0.15}>
                  <div className="paper-3d p-8 h-full">
                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={26} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-medium text-charcoal mb-1">{section.title}</h3>
                    <p className="text-gray-400 text-sm mb-5">{section.subtitle}</p>
                    <ul className="space-y-3">
                      {section.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-3 text-base text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 结尾 ===== */}
      <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-charcoal to-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-3xl">
          <FadeInSection>
            <div className="gold-line w-24 mx-auto mb-12" />
            <blockquote className="font-art text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-8">
              "{closingWords.text}"
            </blockquote>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-gold mb-4 leading-tight">
              {closingWords.line1}
            </p>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-gold mb-12 leading-tight">
              {closingWords.line2}
            </p>
            <div className="gold-line w-24 mx-auto mb-12" />
            <div className="text-white/40 text-sm font-en tracking-wider mb-10">
              <p>{closingWords.author}</p>
              <p className="mt-2">{closingWords.date}</p>
            </div>

            {/* 签名与二维码 */}
            <div className="flex items-end justify-center gap-10 md:gap-16">
              <div className="flex flex-col items-center gap-2">
                <img src="/images/signature.svg" alt="签名" className="h-14 md:h-16 object-contain" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/images/wechat QR.JPG" alt="微信二维码" className="w-24 h-24 md:w-28 md:h-28 rounded-lg shadow-sm" />
                <span className="text-white/40 text-xs">微信</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/images/Website QR.png" alt="网站二维码" className="w-24 h-24 md:w-28 md:h-28 rounded-lg shadow-sm" />
                <span className="text-white/40 text-xs">网站</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
