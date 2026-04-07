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
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-20 bg-night overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />

      <div className="gold-line" />

      <div ref={ref} className="max-w-3xl mx-auto pt-16 sm:pt-20">
        {/* Header */}
        <div
          className="mb-12 sm:mb-16 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase block mb-5"
            style={{ color: '#C9A96E' }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: '#F0EBE1' }}
          >
            Questions,{' '}
            <span className="gold-text">answered.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div
          className="transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transitionDelay: '150ms' }}
        >
          {FAQS.map(({ q, a }, i) => (
            <div
              key={q}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <button
                className="w-full flex items-start justify-between gap-6 text-left py-5 sm:py-6"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-sm sm:text-base font-medium leading-snug transition-colors duration-200"
                  style={{ color: open === i ? '#C9A96E' : '#A89E8F' }}
                >
                  {q}
                </span>
                <span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
                  aria-hidden="true"
                  style={{
                    background: open === i ? 'rgba(201,169,110,0.15)' : 'rgba(255,255,255,0.05)',
                    color: open === i ? '#C9A96E' : '#555A68',
                  }}
                >
                  {open === i ? <Minus size={11} /> : <Plus size={11} />}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p
                  className="text-sm leading-relaxed pb-5 sm:pb-6 pr-8 sm:pr-10"
                  style={{ color: '#555A68' }}
                >
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
