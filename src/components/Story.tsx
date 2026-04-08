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
    <section id="story" className="bg-cream">

      {/* Stats marquee band */}
      <div
        className="overflow-hidden py-5 border-y"
        style={{ borderColor: '#E2DAD0', background: '#EFEBE3' }}
        aria-hidden="true"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...STATS, ...STATS, ...STATS, ...STATS].map(({ value, label }, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-10">
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#8B6C1A' }}
              >
                {value}
              </span>
              <span className="text-xs tracking-[0.12em]" style={{ color: '#A89E95' }}>
                {label}
              </span>
              <span style={{ color: '#D4C9BC' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main story content */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-32">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-4 mb-16 sm:mb-20 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}
        >
          <div className="h-px w-8" style={{ background: '#8B6C1A' }} />
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: '#8B6C1A' }}
          >
            Our Story
          </span>
        </div>

        {/* Editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Large decorative heading */}
          <div
            className="lg:col-span-7 transition-all duration-1000"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(32px)' }}
          >
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight mb-0"
              style={{ color: '#1C1E28' }}
            >
              Redefining what<br />
              <em
                className="not-italic"
                style={{ color: '#8B6C1A' }}
              >
                private travel
              </em>
              <br />
              means.
            </h2>
          </div>

          {/* Right copy */}
          <div
            className="lg:col-span-5 lg:pl-16 xl:pl-24 flex flex-col justify-end transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(32px)',
              transitionDelay: '200ms',
            }}
          >
            <p
              className="text-base lg:text-lg leading-relaxed mb-6"
              style={{ color: '#5A5248' }}
            >
              SkyElite was built on a simple conviction — that exceptional air travel should not be reserved for the few. We've spent over a decade designing a private aviation experience that balances uncompromising luxury with genuine accessibility.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: '#A89E95' }}>
              From coast to coast or continent to continent, every SkyElite flight is crafted around your schedule, your preferences, and your standards. No shared cabins. No compromises.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-6" style={{ background: '#8B6C1A' }} />
              <span
                className="text-xs tracking-[0.2em] uppercase font-medium"
                style={{ color: '#8B6C1A' }}
              >
                Est. 2012
              </span>
            </div>
          </div>
        </div>

        {/* Stats grid — 2-col mobile, 4-col desktop */}
        <div
          className="mt-20 sm:mt-28 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transitionDelay: '350ms' }}
        >
          <div style={{ border: '1px solid #E2DAD0' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="stats-item py-8 sm:py-10 px-6 sm:px-8 relative group overflow-hidden"
                >
                  {/* Hover fill */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: '#EFEBE3' }}
                  />
                  <div className="relative">
                    <p
                      className="text-4xl sm:text-5xl font-light tracking-tight mb-2"
                      style={{ color: '#1C1E28' }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ color: '#A89E95' }}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
