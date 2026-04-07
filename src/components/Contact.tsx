import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ArrowRight } from 'lucide-react'

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

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#F0EBE1',
    borderRadius: '12px',
    padding: '14px 18px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
    WebkitAppearance: 'none',
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-20 bg-night-2 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-72 sm:w-[700px] h-72 sm:h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="gold-line" />

      <div ref={ref} className="max-w-2xl mx-auto pt-16 sm:pt-20">
        {/* Header */}
        <div
          className="mb-10 sm:mb-14 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase block mb-5"
            style={{ color: '#C9A96E' }}
          >
            Book a Flight
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: '#F0EBE1' }}
          >
            Your next flight<br />
            <span className="gold-text">starts here.</span>
          </h2>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl p-10 sm:p-16 text-center transition-all duration-700"
            role="alert"
            style={{
              background: 'rgba(201,169,110,0.05)',
              border: '1px solid rgba(201,169,110,0.2)',
              opacity: inView ? 1 : 0,
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)' }}
            >
              <ArrowRight size={18} style={{ color: '#C9A96E' }} aria-hidden="true" />
            </div>
            <p className="text-lg font-medium mb-2" style={{ color: '#F0EBE1' }}>
              Request received.
            </p>
            <p className="text-sm" style={{ color: '#555A68' }}>
              Your concierge will be in touch within 2 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-3 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transitionDelay: '150ms',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full name"
                required
                autoComplete="name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                autoComplete="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Route (e.g. NYC → LAX)"
                value={form.route}
                onChange={e => setForm({ ...form, route: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <input
                type="number"
                placeholder="Passengers"
                min={1}
                max={19}
                value={form.passengers}
                onChange={e => setForm({ ...form, passengers: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
            </div>
            <textarea
              placeholder="Additional details or requests..."
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <button
                type="submit"
                className="flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-sm font-medium transition-all w-full sm:w-auto justify-center"
                style={{
                  background: 'linear-gradient(135deg, #C9A96E, #E2C98A)',
                  color: '#08090F',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Submit Request
                <ArrowRight size={14} aria-hidden="true" />
              </button>
              <p className="text-xs" style={{ color: '#3A3E4A' }}>
                Response within 2 hours
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
