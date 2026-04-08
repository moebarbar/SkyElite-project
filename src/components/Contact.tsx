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
    background: '#FFFFFF',
    border: '1px solid #E2DAD0',
    color: '#1C1E28',
    borderRadius: '10px',
    padding: '13px 16px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
    WebkitAppearance: 'none',
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* Left: editorial */}
          <div
            className="lg:col-span-5 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8" style={{ background: '#8B6C1A' }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: '#8B6C1A' }}
              >
                Book a Flight
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-8"
              style={{ color: '#1C1E28' }}
            >
              Your next<br />flight starts<br />
              <span style={{ color: '#8B6C1A' }}>here.</span>
            </h2>

            <p className="text-sm leading-relaxed mb-10 max-w-xs" style={{ color: '#A89E95' }}>
              Fill in your details and a dedicated SkyElite concierge will respond within two hours.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-4">
              {[
                'Response within 2 hours',
                'No commitment required',
                'Same-day booking available',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#8B6C1A' }}
                  />
                  <span className="text-xs tracking-wide" style={{ color: '#A89E95' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="lg:col-span-7 lg:pl-16 xl:pl-24 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transitionDelay: '200ms',
            }}
          >
            {submitted ? (
              <div
                className="rounded-2xl p-12 sm:p-16 text-center flex flex-col items-center gap-4 border"
                role="alert"
                style={{ background: '#EFEBE3', borderColor: '#E2DAD0' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: '#FFFFFF', border: '1px solid #D4C9BC' }}
                >
                  <ArrowRight size={18} style={{ color: '#8B6C1A' }} aria-hidden="true" />
                </div>
                <p className="text-lg font-medium" style={{ color: '#1C1E28' }}>
                  Request received.
                </p>
                <p className="text-sm" style={{ color: '#A89E95' }}>
                  Your concierge will be in touch within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#8B6C1A')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E2DAD0')}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#8B6C1A')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E2DAD0')}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Route (e.g. NYC → LAX)"
                    value={form.route}
                    onChange={e => setForm({ ...form, route: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#8B6C1A')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E2DAD0')}
                  />
                  <input
                    type="number"
                    placeholder="Passengers"
                    min={1}
                    max={19}
                    value={form.passengers}
                    onChange={e => setForm({ ...form, passengers: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#8B6C1A')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E2DAD0')}
                  />
                </div>
                <textarea
                  placeholder="Additional details or requests..."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#8B6C1A')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#E2DAD0')}
                />
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase transition-all w-full sm:w-auto justify-center"
                    style={{
                      background: '#1C1E28',
                      color: '#F7F4EF',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#8B6C1A')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#1C1E28')}
                  >
                    Submit Request
                    <ArrowRight size={13} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
