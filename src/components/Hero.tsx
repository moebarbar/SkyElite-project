import { Navbar } from './Navbar'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_URL}
        aria-hidden="true"
      />

      {/* Subtle light overlay */}
      <div className="absolute inset-0 bg-gray-50/20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />

        {/* Main hero content */}
        <div className="flex-1 flex items-center justify-center -mt-16 sm:-mt-20">
          <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
            {/* Label */}
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-5 animate-fade-up"
              style={{ color: '#8B6C1A' }}
            >
              Private Aviation
            </p>

            {/* Heading */}
            <div className="mb-6 animate-fade-up-delay">
              <span
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tighter"
                style={{ color: 'rgba(30,30,40,0.45)' }}
              >
                Premium.
              </span>
              <span
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tighter"
                style={{ color: '#1C1E28', marginTop: '-6px' }}
              >
                Accessible.
              </span>
            </div>

            {/* Subtitle */}
            <p
              className="text-sm sm:text-base md:text-lg mb-8 max-w-sm sm:max-w-md mx-auto animate-fade-up-delay-2"
              style={{ color: 'rgba(30,30,40,0.55)' }}
            >
              Your dedication deserves recognition.
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-3 animate-fade-up-delay-3">
              <a
                href="#story"
                className="px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase no-underline transition-all duration-200"
                style={{
                  background: 'rgba(30,30,40,0.08)',
                  border: '1px solid rgba(30,30,40,0.25)',
                  color: 'rgba(30,30,40,0.65)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(30,30,40,0.14)'
                  e.currentTarget.style.color = '#1C1E28'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(30,30,40,0.08)'
                  e.currentTarget.style.color = 'rgba(30,30,40,0.65)'
                }}
              >
                Discover
              </a>
              <a
                href="#contact"
                className="px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase no-underline transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #C9A96E, #E2C98A)',
                  color: '#08090F',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom credit */}
        <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 flex justify-center z-10">
          <a
            href="https://instagram.com/immoebarbar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built with love by Moe Barbar — Instagram @immoebarbar"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold no-underline transition-all duration-200"
            style={{
              background: 'rgba(10,10,15,0.75)',
              border: '1px solid rgba(201,169,110,0.5)',
              backdropFilter: 'blur(16px)',
              color: '#C9A96E',
              letterSpacing: '0.03em',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E2C98A')}
            onMouseLeave={e => (e.currentTarget.style.color = '#C9A96E')}
          >
            Built with ❤️ by Moe Barbar
          </a>
        </div>
      </div>
    </section>
  )
}
