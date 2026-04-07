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
    <section id="rates" className="section-divider py-28 px-6 lg:px-20 bg-gray-50">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 block mb-4">
            Rates
          </span>
          <h2
            className="text-4xl lg:text-5xl font-normal tracking-tight"
            style={{ color: '#202A36' }}
          >
            Transparent pricing.<br />Exceptional value.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map(({ name, tagline, price, unit, features, featured }, i) => (
            <div
              key={name}
              className={`rounded-2xl p-8 flex flex-col gap-6 transition-all duration-700 border ${
                featured
                  ? 'border-2 bg-white shadow-lg'
                  : 'border-gray-200 bg-white'
              }`}
              style={{
                borderColor: featured ? '#202A36' : undefined,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(24px)',
                transitionDelay: `${i * 100 + 150}ms`,
              }}
            >
              {featured && (
                <span
                  className="self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: '#202A36' }}
                >
                  Most Popular
                </span>
              )}
              <div>
                <h3
                  className="text-xl font-semibold mb-1 tracking-tight"
                  style={{ color: '#202A36' }}
                >
                  {name}
                </h3>
                <p className="text-sm text-gray-500">{tagline}</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-tight" style={{ color: '#202A36' }}>
                  {price}
                </p>
                <p className="text-xs text-gray-400 mt-1">{unit}</p>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-gray-400" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto block text-center py-3 rounded-full text-sm font-medium transition-colors no-underline ${
                  featured
                    ? 'text-white'
                    : 'text-gray-800 bg-gray-100 hover:bg-gray-200'
                }`}
                style={featured ? { backgroundColor: '#202A36' } : undefined}
                onMouseEnter={e => {
                  if (featured) e.currentTarget.style.backgroundColor = '#1a2229'
                }}
                onMouseLeave={e => {
                  if (featured) e.currentTarget.style.backgroundColor = '#202A36'
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
