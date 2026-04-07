import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Rates', href: '#rates' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <div className="relative z-10">
      <nav
        className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between transition-all duration-500"
        style={{ borderBottom: '1px solid transparent' }}
      >
        {/* Brand */}
        <a
          href="#"
          className="text-xl font-light tracking-[0.2em] uppercase no-underline transition-colors duration-200"
          style={{ color: '#8B6C1A' }}
        >
          SkyElite
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-xs font-medium tracking-[0.15em] uppercase no-underline transition-colors duration-200"
                style={{ color: 'rgba(30,30,40,0.5)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1C1E28')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(30,30,40,0.5)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold tracking-[0.12em] uppercase no-underline transition-all duration-200"
          style={{
            background: 'rgba(139,108,26,0.1)',
            border: '1px solid rgba(139,108,26,0.4)',
            color: '#8B6C1A',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(139,108,26,0.18)'
            e.currentTarget.style.borderColor = 'rgba(139,108,26,0.65)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(139,108,26,0.1)'
            e.currentTarget.style.borderColor = 'rgba(139,108,26,0.4)'
          }}
        >
          Book Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{ color: '#C9A96E' }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 z-20 px-4 pb-4 md:hidden">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(13,15,26,0.97)',
              border: '1px solid rgba(201,169,110,0.15)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-xs font-medium tracking-[0.15em] uppercase no-underline transition-colors"
                style={{
                  color: 'rgba(240,235,225,0.5)',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A96E')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,225,0.5)')}
              >
                {label}
              </a>
            ))}
            <div className="px-4 py-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-full text-xs font-semibold tracking-[0.12em] uppercase no-underline"
                style={{
                  background: 'linear-gradient(135deg, #C9A96E, #E2C98A)',
                  color: '#08090F',
                }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
