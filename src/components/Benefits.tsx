import { useInView } from '../hooks/useInView'
import { Clock, Globe, Shield, Star, Headphones, Utensils } from 'lucide-react'

const BENEFITS = [
  {
    icon: Clock,
    title: 'Fly on your schedule',
    desc: 'Depart when you want, not when the airline allows. Same-day booking available.',
  },
  {
    icon: Globe,
    title: '340+ destinations',
    desc: 'Access thousands of private terminals worldwide, including airports commercial carriers never reach.',
  },
  {
    icon: Shield,
    title: 'Absolute privacy',
    desc: 'Your cabin, your crew, your conversation. No strangers, no public terminals.',
  },
  {
    icon: Star,
    title: 'Curated fleet',
    desc: 'Every aircraft in our fleet is inspected, certified, and maintained to the highest standards.',
  },
  {
    icon: Headphones,
    title: '24/7 concierge',
    desc: 'Your dedicated concierge handles everything — from ground transportation to hotel suites.',
  },
  {
    icon: Utensils,
    title: 'Chef-curated dining',
    desc: 'Pre-flight catering crafted to your dietary preferences, sourced from top suppliers.',
  },
]

export function Benefits() {
  const { ref, inView } = useInView()

  return (
    <section id="benefits" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-20 bg-night-2 overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
          transform: 'translate(-40%, -50%)',
        }}
      />

      <div className="gold-line" />

      <div ref={ref} className="max-w-6xl mx-auto pt-16 sm:pt-20">
        {/* Header */}
        <div
          className="mb-14 sm:mb-20 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase block mb-5"
            style={{ color: '#C9A96E' }}
          >
            Benefits
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight max-w-xl"
            style={{ color: '#F0EBE1' }}
          >
            Every detail,<br />
            <span className="gold-text">considered.</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-6 sm:p-8 transition-all duration-700 relative overflow-hidden"
              style={{
                background: '#0D0F1A',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transitionDelay: `${i * 80 + 150}ms`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(201,169,110,0.06) 0%, transparent 70%)',
                }}
              />

              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(201,169,110,0.1)',
                  border: '1px solid rgba(201,169,110,0.2)',
                }}
              >
                <Icon size={16} style={{ color: '#C9A96E' }} aria-hidden="true" />
              </div>

              <h3
                className="text-sm font-semibold mb-2 tracking-wide"
                style={{ color: '#F0EBE1' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#555A68' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
