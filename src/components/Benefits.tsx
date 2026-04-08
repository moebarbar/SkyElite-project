import { useInView } from '../hooks/useInView'
import { useRef, useState, useCallback } from 'react'
import { Clock, Globe, Shield, Star, Headphones, Utensils } from 'lucide-react'

const BENEFITS = [
  {
    icon: Clock,
    num: '01',
    title: 'Fly on your schedule',
    desc: 'Depart when you want, not when the airline allows. Same-day booking available.',
  },
  {
    icon: Globe,
    num: '02',
    title: '340+ destinations',
    desc: 'Access thousands of private terminals worldwide, including airports commercial carriers never reach.',
  },
  {
    icon: Shield,
    num: '03',
    title: 'Absolute privacy',
    desc: 'Your cabin, your crew, your conversation. No strangers, no public terminals.',
  },
  {
    icon: Star,
    num: '04',
    title: 'Curated fleet',
    desc: 'Every aircraft in our fleet is inspected, certified, and maintained to the highest standards.',
  },
  {
    icon: Headphones,
    num: '05',
    title: '24/7 concierge',
    desc: 'Your dedicated concierge handles everything — from ground transportation to hotel suites.',
  },
  {
    icon: Utensils,
    num: '06',
    title: 'Chef-curated dining',
    desc: 'Pre-flight catering crafted to your dietary preferences, sourced from top suppliers.',
  },
]

export function Benefits() {
  const { ref, inView } = useInView()
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / BENEFITS.length
    const index = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, BENEFITS.length - 1))
  }, [])

  // Mouse drag scroll
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current
    if (!el) return
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
    el.style.cursor = 'grabbing'
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.active || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX)
  }
  const onMouseUp = () => {
    drag.current.active = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  return (
    <section id="benefits" className="py-24 sm:py-32 bg-cream overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="px-4 sm:px-8 lg:px-16 mb-12 sm:mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8" style={{ background: '#8B6C1A' }} />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: '#8B6C1A' }}>
                  Benefits
                </span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight"
                style={{ color: '#1C1E28' }}
              >
                Every detail,<br />
                <span style={{ color: '#8B6C1A' }}>considered.</span>
              </h2>
            </div>
            {/* Scroll hint */}
            <p
              className="text-xs tracking-[0.15em] uppercase flex items-center gap-2 self-end sm:self-auto pb-1"
              style={{ color: '#C9A96E' }}
            >
              <span>Scroll to explore</span>
              <span>→</span>
            </p>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pl-4 sm:pl-8 lg:pl-16 pr-4 sm:pr-8 lg:pr-16 pb-6 select-none"
          style={{
            scrollbarWidth: 'none',
            cursor: 'grab',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.7s ease 0.2s',
          }}
          onScroll={onScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {/* Hide scrollbar webkit */}
          <style>{`.benefits-track::-webkit-scrollbar { display: none; }`}</style>

          {BENEFITS.map(({ icon: Icon, num, title, desc }, i) => (
            <div
              key={title}
              className="group flex-shrink-0 flex flex-col justify-between rounded-2xl p-8 transition-all duration-300"
              style={{
                width: 'clamp(260px, 32vw, 340px)',
                minHeight: '300px',
                scrollSnapAlign: 'start',
                background: i % 2 === 0 ? '#FFFFFF' : '#EFEBE3',
                border: '1px solid #E2DAD0',
                transitionDelay: `${i * 60}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(28,30,40,0.09)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top */}
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="text-xs font-semibold tracking-[0.2em]"
                    style={{ color: '#D4C9BC' }}
                  >
                    {num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: i % 2 === 0 ? '#F7F4EF' : '#FFFFFF',
                      border: '1px solid #E2DAD0',
                    }}
                  >
                    <Icon size={16} style={{ color: '#8B6C1A' }} aria-hidden="true" />
                  </div>
                </div>

                <h3
                  className="text-lg font-semibold mb-3 tracking-tight"
                  style={{ color: '#1C1E28' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A89E95' }}>
                  {desc}
                </p>
              </div>

              {/* Bottom gold rule — appears on hover */}
              <div
                className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #8B6C1A, #C9A96E)' }}
              />
            </div>
          ))}

          {/* End spacer */}
          <div className="flex-shrink-0 w-4 sm:w-8 lg:w-16" />
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-6 px-4">
          {BENEFITS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to benefit ${i + 1}`}
              onClick={() => {
                const el = trackRef.current
                if (!el) return
                const cardWidth = el.scrollWidth / BENEFITS.length
                el.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
              }}
              className="h-px transition-all duration-300"
              style={{
                width: i === activeIndex ? '28px' : '12px',
                background: i === activeIndex ? '#8B6C1A' : '#D4C9BC',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
