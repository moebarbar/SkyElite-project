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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative z-10">
      <nav
        className={`max-w-7xl mx-auto px-8 py-6 flex items-center justify-between transition-all duration-300`}
      >
        {/* Brand */}
        <a
          href="#"
          className="text-2xl font-semibold text-gray-900 tracking-tight no-underline"
        >
          SkyElite
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-white no-underline transition-colors"
          style={{ backgroundColor: '#202A36' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a2229')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#202A36')}
        >
          Book Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center text-gray-900"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 z-20 px-4 pb-4 md:hidden">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors no-underline border-b border-gray-100 last:border-0"
              >
                {label}
              </a>
            ))}
            <div className="px-4 py-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-2.5 rounded-full text-sm font-medium text-white no-underline"
                style={{ backgroundColor: '#202A36' }}
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
