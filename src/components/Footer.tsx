const LINKS = {
  Company: ['Story', 'Fleet', 'Safety', 'Careers'],
  Services: ['Charter Flights', 'Corporate Travel', 'Group Charters', 'Empty Legs'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export function Footer() {
  return (
    <footer
      className="relative py-20 px-6 lg:px-20 overflow-hidden"
      style={{ background: '#06070D' }}
    >
      {/* Top gold line */}
      <div className="gold-line mb-16" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
            <span
              className="text-xl font-light tracking-[0.12em] uppercase"
              style={{ color: '#C9A96E' }}
            >
              SkyElite
            </span>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#3A3E4A' }}>
              Premium private aviation accessible to those who demand the best.
            </p>
            <a
              href="https://instagram.com/immoebarbar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs no-underline transition-colors duration-200 self-start"
              style={{ color: '#3A3E4A' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3A3E4A')}
            >
              @immoebarbar
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-5">
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#C9A96E' }}
              >
                {group}
              </span>
              <ul className="flex flex-col gap-3 list-none">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200 no-underline"
                      style={{ color: '#3A3E4A' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#A89E8F')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#3A3E4A')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-xs" style={{ color: '#2A2E3A' }}>
            © {new Date().getFullYear()} SkyElite Aviation. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ color: '#2A2E3A' }}>
            Fly higher. Live better.
          </p>
        </div>
      </div>
    </footer>
  )
}
