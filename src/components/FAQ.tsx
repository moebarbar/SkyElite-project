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
    <section id="faq" className="section-divider py-28 px-6 lg:px-20 bg-gray-50">
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          className="mb-14 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 block mb-4">
            FAQ
          </span>
          <h2
            className="text-4xl lg:text-5xl font-normal tracking-tight"
            style={{ color: '#202A36' }}
          >
            Questions, answered.
          </h2>
        </div>

        {/* Accordion */}
        <div
          className="flex flex-col divide-y divide-gray-200 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transitionDelay: '150ms' }}
        >
          {FAQS.map(({ q, a }, i) => (
            <div key={q} className="py-5">
              <button
                className="w-full flex items-start justify-between gap-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-base font-medium leading-snug"
                  style={{ color: '#202A36' }}
                >
                  {q}
                </span>
                <span className="flex-shrink-0 mt-0.5 text-gray-400">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed pr-8">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
