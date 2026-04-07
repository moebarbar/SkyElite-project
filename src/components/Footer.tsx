const LINKS = {
  Company: ['Story', 'Fleet', 'Safety', 'Careers'],
  Services: ['Charter Flights', 'Corporate Travel', 'Group Charters', 'Empty Legs'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export function Footer() {
  return (
    <footer className="section-divider py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <span className="text-xl font-semibold tracking-tight" style={{ color: '#202A36' }}>
              SkyElite
            </span>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Premium private aviation accessible to those who demand the best.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-400">
                {group}
              </span>
              <ul className="flex flex-col gap-2.5 list-none">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline"
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
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SkyElite Aviation. All rights reserved.
          </p>
          <p className="text-xs text-gray-300">Fly higher. Live better.</p>
        </div>
      </div>
    </footer>
  )
}
