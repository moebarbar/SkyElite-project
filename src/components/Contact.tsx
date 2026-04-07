import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export function Contact() {
  const { ref, inView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    route: '',
    passengers: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-divider py-28 px-6 lg:px-20 bg-white">
      <div ref={ref} className="max-w-2xl mx-auto">
        {/* Header */}
        <div
          className="mb-12 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 block mb-4">
            Book a Flight
          </span>
          <h2
            className="text-4xl lg:text-5xl font-normal tracking-tight"
            style={{ color: '#202A36' }}
          >
            Your next flight<br />starts here.
          </h2>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl border border-gray-100 bg-gray-50 p-12 text-center transition-all duration-700"
            style={{ opacity: inView ? 1 : 0 }}
          >
            <p className="text-lg font-semibold mb-2" style={{ color: '#202A36' }}>
              Request received.
            </p>
            <p className="text-sm text-gray-500">
              Your concierge will be in touch within 2 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transitionDelay: '150ms',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-gray-50"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-gray-50"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Route (e.g. NYC → LAX)"
                value={form.route}
                onChange={e => setForm({ ...form, route: e.target.value })}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-gray-50"
              />
              <input
                type="number"
                placeholder="Number of passengers"
                min={1}
                max={19}
                value={form.passengers}
                onChange={e => setForm({ ...form, passengers: e.target.value })}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-gray-50"
              />
            </div>
            <textarea
              placeholder="Additional details or requests..."
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-gray-50 resize-none"
            />
            <button
              type="submit"
              className="self-start px-8 py-3 rounded-full text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: '#202A36' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a2229')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#202A36')}
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
