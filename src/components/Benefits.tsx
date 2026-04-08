import { useInView } from '../hooks/useInView'
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

  return (
    <section id="benefits" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 sm:mb-20 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8" style={{ background: '#8B6C1A' }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: '#8B6C1A' }}
              >
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
        </div>

        {/* Benefits grid */}
        <div
          className="border-t"
          style={{ borderColor: '#E2DAD0' }}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.slice(0, 3).map(({ icon: Icon, num, title, desc }, i) => (
              <div
                key={title}
                className="group p-8 sm:p-10 border-r border-b relative overflow-hidden transition-all duration-700"
                style={{
                  borderColor: '#E2DAD0',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(24px)',
                  transitionDelay: `${i * 100 + 150}ms`,
                }}
              >
                {/* Hover bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: '#EFEBE3' }}
                />
                <div className="relative">
                  {/* Number */}
                  <span
                    className="block text-xs font-semibold tracking-[0.2em] mb-6"
                    style={{ color: '#D4C9BC' }}
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{
                      background: '#F7F4EF',
                      border: '1px solid #E2DAD0',
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: '#8B6C1A' }}
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className="text-base font-semibold mb-2.5 tracking-tight"
                    style={{ color: '#1C1E28' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A89E95' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.slice(3).map(({ icon: Icon, num, title, desc }, i) => (
              <div
                key={title}
                className="group p-8 sm:p-10 border-r last:border-r-0 relative overflow-hidden transition-all duration-700"
                style={{
                  borderColor: '#E2DAD0',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(24px)',
                  transitionDelay: `${(i + 3) * 100 + 150}ms`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: '#EFEBE3' }}
                />
                <div className="relative">
                  <span
                    className="block text-xs font-semibold tracking-[0.2em] mb-6"
                    style={{ color: '#D4C9BC' }}
                  >
                    {num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: '#F7F4EF', border: '1px solid #E2DAD0' }}
                  >
                    <Icon size={16} style={{ color: '#8B6C1A' }} aria-hidden="true" />
                  </div>
                  <h3
                    className="text-base font-semibold mb-2.5 tracking-tight"
                    style={{ color: '#1C1E28' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A89E95' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
