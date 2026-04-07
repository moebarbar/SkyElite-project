import { useInView } from '../hooks/useInView'
import { Check } from 'lucide-react'

const TIERS = [
  {
    name: 'Horizon',
    tagline: 'First-class private experience',
    price: '$4,200',
    unit: 'per flight hour',
    features: [
      'Light jet up to 6 passengers',
      'Nationwide routes',
      'Complimentary catering',
      '24hr booking support',
      'Ground transportation',
    ],
    featured: false,
  },
  {
    name: 'Apex',
    tagline: 'The SkyElite standard',
    price: '$7,800',
    unit: 'per flight hour',
    features: [
      'Midsize jet up to 9 passengers',
      'Intercontinental routes',
      'Chef-curated dining',
      'Dedicated concierge',
      'Ground & hotel coordination',
      'Priority availability',
    ],
    featured: true,
  },
  {
    name: 'Sovereign',
    tagline: 'The ultimate in air travel',
    price: 'Custom',
    unit: 'contact for pricing',
    features: [
      'Ultra-long-range heavy jet',
      'Global routes, any timezone',
      'Full crew & flight attendant',
      'Personal travel consultant',
      'Bespoke itinerary design',
      'Estate & villa coordination',
    ],
    featured: false,
  },
]

export function Rates() {
  const { ref, inView } = useInView()

  return (
    <section id="rates" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-20 bg-night overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,169,110,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="gold-line" />

      <div ref={ref} className="max-w-6xl mx-auto pt-16 sm:pt-20">
        {/* Header */}
        <div
          className="text-center mb-14 sm:mb-20 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase block mb-5"
            style={{ color: '#C9A96E' }}
          >
            Rates
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: '#F0EBE1' }}
          >
            Transparent pricing.<br />
            <span className="gold-text">Exceptional value.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {TIERS.map(({ name, tagline, price, unit, features, featured }, i) => (
            <div
              key={name}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col gap-6 transition-all duration-700 relative overflow-hidden ${
                featured ? 'card-gold' : 'card-dark'
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(28px)',
                transitionDelay: `${i * 120 + 150}ms`,
              }}
            >
              {featured && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(201,169,110,0.1) 0%, transparent 70%)',
                  }}
                />
              )}

              {featured && (
                <span
                  className="self-start text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    color: '#C9A96E',
                    border: '1px solid rgba(201,169,110,0.4)',
                    background: 'rgba(201,169,110,0.08)',
                  }}
                >
                  Most Popular
                </span>
              )}

              <div>
                <h3
                  className="text-lg sm:text-xl font-medium mb-1.5 tracking-wide"
                  style={{ color: featured ? '#C9A96E' : '#F0EBE1' }}
                >
                  {name}
                </h3>
                <p className="text-sm" style={{ color: '#555A68' }}>{tagline}</p>
              </div>

              <div className="pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p
                  className="text-3xl sm:text-4xl font-light tracking-tight"
                  style={{ color: featured ? '#C9A96E' : '#F0EBE1' }}
                >
                  {price}
                </p>
                <p className="text-xs mt-1.5 tracking-[0.1em] uppercase" style={{ color: '#555A68' }}>
                  {unit}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={13}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: featured ? '#C9A96E' : '#555A68' }}
                    />
                    <span className="text-sm" style={{ color: '#7A7D8A' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-2 block text-center py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-[0.08em] transition-all no-underline"
                style={
                  featured
                    ? { background: 'linear-gradient(135deg, #C9A96E, #E2C98A)', color: '#08090F' }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#A89E8F',
                      }
                }
                onMouseEnter={e => {
                  if (!featured) {
                    e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'
                    e.currentTarget.style.color = '#C9A96E'
                  }
                }}
                onMouseLeave={e => {
                  if (!featured) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#A89E8F'
                  }
                }}
              >
                {price === 'Custom' ? 'Contact Us' : 'Reserve Now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
