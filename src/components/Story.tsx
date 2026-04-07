import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '12+', label: 'Years of excellence' },
  { value: '340+', label: 'Global destinations' },
  { value: '98%', label: 'On-time departure' },
  { value: '2,400+', label: 'Flights completed' },
]

export function Story() {
  const { ref, inView } = useInView()

  return (
    <section id="story" className="section-divider py-28 px-6 lg:px-20 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(28px)',
            }}
          >
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 block mb-4">
              Our Story
            </span>
            <h2
              className="text-4xl lg:text-5xl font-normal leading-tight mb-6 tracking-tight"
              style={{ color: '#202A36' }}
            >
              Redefining what<br />private travel means.
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-5">
              SkyElite was built on a simple conviction — that exceptional air travel should not be reserved for the few. We've spent over a decade designing a private aviation experience that balances uncompromising luxury with genuine accessibility.
            </p>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              From coast to coast or continent to continent, every SkyElite flight is crafted around your schedule, your preferences, and your standards. No shared cabins. No compromises.
            </p>
          </div>

          {/* Right: stats */}
          <div
            className="grid grid-cols-2 gap-6 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(28px)',
              transitionDelay: '150ms',
            }}
          >
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <p
                  className="text-3xl font-semibold tracking-tight mb-1"
                  style={{ color: '#202A36' }}
                >
                  {value}
                </p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
