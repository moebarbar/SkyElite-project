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
    <section
      id="rates"
      className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16"
      style={{ background: '#EFEBE3' }}
    >
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
                Rates
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight"
              style={{ color: '#1C1E28' }}
            >
              Transparent pricing.<br />
              <span style={{ color: '#8B6C1A' }}>Exceptional value.</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-xs sm:text-right"
            style={{ color: '#A89E95' }}
          >
            All rates include crew, ground handling, and standard catering. No hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {TIERS.map(({ name, tagline, price, unit, features, featured }, i) => (
            <div
              key={name}
              className="card-cream-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-700 relative"
              style={{
                background: featured ? '#1C1E28' : '#FFFFFF',
                border: featured ? 'none' : '1px solid #E2DAD0',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(28px)',
                transitionDelay: `${i * 120 + 150}ms`,
              }}
            >
              {/* Gold top accent */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: featured
                    ? 'linear-gradient(90deg, #C9A96E, #E2C98A, #C9A96E)'
                    : '#E2DAD0',
                }}
              />

              <div className="p-7 sm:p-8 flex flex-col gap-6 flex-1">
                {/* Badge */}
                {featured && (
                  <span
                    className="self-start text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                    style={{
                      color: '#1C1E28',
                      background: 'linear-gradient(135deg, #C9A96E, #E2C98A)',
                    }}
                  >
                    Most Popular
                  </span>
                )}

                {/* Name */}
                <div>
                  <h3
                    className="text-2xl font-light tracking-tight mb-1"
                    style={{ color: featured ? '#F7F4EF' : '#1C1E28' }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: featured ? 'rgba(247,244,239,0.45)' : '#A89E95' }}
                  >
                    {tagline}
                  </p>
                </div>

                {/* Price */}
                <div
                  className="pb-6"
                  style={{ borderBottom: `1px solid ${featured ? 'rgba(255,255,255,0.08)' : '#E2DAD0'}` }}
                >
                  <p
                    className="text-4xl sm:text-5xl font-light tracking-tight"
                    style={{ color: featured ? '#C9A96E' : '#1C1E28' }}
                  >
                    {price}
                  </p>
                  <p
                    className="text-xs mt-1.5 tracking-[0.1em] uppercase"
                    style={{ color: featured ? 'rgba(247,244,239,0.35)' : '#A89E95' }}
                  >
                    {unit}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={13}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: featured ? '#C9A96E' : '#8B6C1A' }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: featured ? 'rgba(247,244,239,0.65)' : '#5A5248' }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-4 block text-center py-3.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase no-underline transition-all duration-200"
                  style={
                    featured
                      ? {
                          background: 'linear-gradient(135deg, #C9A96E, #E2C98A)',
                          color: '#1C1E28',
                        }
                      : {
                          background: 'transparent',
                          border: '1px solid #D4C9BC',
                          color: '#5A5248',
                        }
                  }
                  onMouseEnter={e => {
                    if (!featured) {
                      e.currentTarget.style.borderColor = '#8B6C1A'
                      e.currentTarget.style.color = '#8B6C1A'
                    } else {
                      e.currentTarget.style.opacity = '0.88'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!featured) {
                      e.currentTarget.style.borderColor = '#D4C9BC'
                      e.currentTarget.style.color = '#5A5248'
                    } else {
                      e.currentTarget.style.opacity = '1'
                    }
                  }}
                >
                  {price === 'Custom' ? 'Contact Us' : 'Reserve Now'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
