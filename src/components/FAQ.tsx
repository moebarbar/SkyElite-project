import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'How far in advance do I need to book?',
    a: 'We can accommodate same-day bookings subject to availability. For peak periods or international routes, we recommend 48–72 hours notice to secure your preferred aircraft and crew.',
  },
  {
    q: 'What is included in the quoted price?',
    a: 'All SkyElite quotes include crew costs, standard catering, ground handling, and landing fees. International routes may include additional fees for customs and permits, which we outline transparently before confirmation.',
  },
  {
    q: 'Can I choose my aircraft type?',
    a: 'Yes. Our fleet includes light, midsize, super-midsize, and heavy jets. Your concierge will recommend the optimal aircraft based on passenger count, route, and your preferences.',
  },
  {
    q: 'What airports can SkyElite access?',
    a: 'SkyElite operates from over 5,000 private terminals globally — the vast majority not accessible to commercial carriers. This includes city-center airports, resort airstrips, and remote destinations.',
  },
  {
    q: 'Is there a membership or annual fee?',
    a: 'No. SkyElite operates on a per-flight basis with no mandatory membership. We do offer preferred-client agreements for frequent flyers that include priority availability and locked rates.',
  },
  {
    q: 'Are pets allowed on board?',
    a: 'Absolutely. Your aircraft, your rules. Pets are welcome in the cabin with you — no crates required. Just let your concierge know in advance.',
  },
]

export function FAQ() {
  const { ref, inView } = useInView()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16"
      style={{ background: '#EFEBE3' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Left header — sticks while accordion scrolls */}
          <div
            className="lg:col-span-4 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}
          >
            <div className="lg:sticky lg:top-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8" style={{ background: '#8B6C1A' }} />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: '#8B6C1A' }}
                >
                  FAQ
                </span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-light tracking-tight leading-tight mb-6"
                style={{ color: '#1C1E28' }}
              >
                Questions,<br />
                <span style={{ color: '#8B6C1A' }}>answered.</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#A89E95' }}>
                Can't find what you're looking for? Reach out to your concierge directly.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 text-xs font-semibold tracking-[0.12em] uppercase no-underline transition-colors duration-200"
                style={{ color: '#8B6C1A' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Contact us
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div
            className="lg:col-span-8 lg:pl-16 xl:pl-24 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            {FAQS.map(({ q, a }, i) => (
              <div
                key={q}
                className="border-t"
                style={{ borderColor: '#D4C9BC' }}
              >
                <button
                  className="w-full flex items-start justify-between gap-8 text-left py-6 sm:py-7 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-sm sm:text-base font-medium leading-snug transition-colors duration-200"
                    style={{ color: open === i ? '#8B6C1A' : '#3A3530' }}
                  >
                    {q}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 mt-0.5"
                    aria-hidden="true"
                    style={{
                      borderColor: open === i ? '#8B6C1A' : '#D4C9BC',
                      color: open === i ? '#8B6C1A' : '#A89E95',
                      background: open === i ? 'rgba(139,108,26,0.06)' : 'transparent',
                    }}
                  >
                    {open === i ? <Minus size={11} /> : <Plus size={11} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{ maxHeight: open === i ? '300px' : '0px' }}
                >
                  <p
                    className="text-sm leading-relaxed pb-6 sm:pb-7 pr-10 sm:pr-14"
                    style={{ color: '#7A7060' }}
                  >
                    {a}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t" style={{ borderColor: '#D4C9BC' }} />
          </div>

        </div>
      </div>
    </section>
  )
}
