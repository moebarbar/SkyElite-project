const LINKS = {
  Company: ['Story', 'Fleet', 'Safety', 'Careers'],
  Services: ['Charter Flights', 'Corporate Travel', 'Group Charters', 'Empty Legs'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export function Footer() {
  return (
    <footer style={{ background: '#1C1E28' }}>

      {/* Top gold rule */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 sm:pt-20 pb-10 sm:pb-12">

        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-5 pr-0 lg:pr-16">
            <span
              className="text-xl font-light tracking-[0.2em] uppercase"
              style={{ color: '#C9A96E' }}
            >
              SkyElite
            </span>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(247,244,239,0.3)' }}>
              Premium private aviation accessible to those who demand the best. Your journey, your terms.
            </p>
            <a
              href="https://instagram.com/immoebarbar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs no-underline transition-all duration-200 self-start"
              style={{ color: 'rgba(201,169,110,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,169,110,0.5)')}
            >
              Moe Barbar
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4">
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: 'rgba(201,169,110,0.6)' }}
              >
                {group}
              </span>
              <ul className="flex flex-col gap-2.5 list-none">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm no-underline transition-colors duration-200"
                      style={{ color: 'rgba(247,244,239,0.25)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.7)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.25)')}
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
          className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(247,244,239,0.18)' }}>
            © {new Date().getFullYear()} SkyElite Aviation. All rights reserved.
          </p>
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: 'rgba(201,169,110,0.25)' }}
          >
            Fly higher. Live better.
          </p>
        </div>
      </div>
    </footer>
  )
}
