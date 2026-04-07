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
    <section id="benefits" className="section-divider py-28 px-6 lg:px-20 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 block mb-4">
            Benefits
          </span>
          <h2
            className="text-4xl lg:text-5xl font-normal tracking-tight max-w-xl"
            style={{ color: '#202A36' }}
          >
            Every detail,<br />considered.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="flex flex-col gap-4 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transitionDelay: `${i * 80 + 150}ms`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100"
              >
                <Icon size={18} className="text-gray-600" />
              </div>
              <div>
                <h3
                  className="text-base font-semibold mb-1.5 tracking-tight"
                  style={{ color: '#202A36' }}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
