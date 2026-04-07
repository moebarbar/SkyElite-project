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
    <section id="story" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-20 bg-night-2 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-72 sm:w-[600px] h-72 sm:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="gold-line" />

      <div ref={ref} className="max-w-6xl mx-auto pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase block mb-5"
              style={{ color: '#C9A96E' }}
            >
              Our Story
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-7 tracking-tight"
              style={{ color: '#F0EBE1' }}
            >
              Redefining what<br />
              <em className="not-italic font-normal" style={{ color: '#C9A96E' }}>private travel</em> means.
            </h2>
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5"
              style={{ color: '#7A7D8A' }}
            >
              SkyElite was built on a simple conviction — that exceptional air travel should not be reserved for the few. We've spent over a decade designing a private aviation experience that balances uncompromising luxury with genuine accessibility.
            </p>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed" style={{ color: '#555A68' }}>
              From coast to coast or continent to continent, every SkyElite flight is crafted around your schedule, your preferences, and your standards. No shared cabins. No compromises.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: 'rgba(201,169,110,0.25)' }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#C9A96E' }}>
                Est. 2012
              </span>
              <div className="h-px flex-1" style={{ background: 'rgba(201,169,110,0.25)' }} />
            </div>
          </div>

          {/* Right: stats */}
          <div
            className="grid grid-cols-2 gap-3 sm:gap-4 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: '200ms',
            }}
          >
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="card-dark rounded-2xl p-5 sm:p-7 relative overflow-hidden group"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(201,169,110,0.12), transparent 70%)',
                  }}
                />
                <p className="text-3xl sm:text-4xl font-light tracking-tight mb-1.5 gold-text">
                  {value}
                </p>
                <p className="text-xs tracking-[0.12em] uppercase" style={{ color: '#555A68' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
