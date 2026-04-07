import { Navbar } from './Navbar'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

export function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_URL}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gray-50/20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />

        {/* Main hero content */}
        <div className="flex-1 flex items-center justify-center -mt-40">
          <div className="text-center px-6 max-w-4xl mx-auto">
            {/* Label */}
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4 animate-fade-up">
              Private Jets
            </p>

            {/* Overlapping heading */}
            <div className="mb-6 animate-fade-up-delay">
              <span
                className="block text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter"
              >
                Premium.
              </span>
              <span
                className="block text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter"
                style={{ color: '#202A36', marginTop: '-12px' }}
              >
                Accessible.
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up-delay-2">
              Your dedication deserves recognition.
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-4 animate-fade-up-delay-3">
              <a
                href="#story"
                className="px-6 py-2.5 rounded-full bg-gray-300 text-gray-800 font-medium text-sm hover:bg-gray-400 transition-colors no-underline"
              >
                Discover
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full text-white font-medium text-sm no-underline transition-colors"
                style={{ backgroundColor: '#202A36' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a2229')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#202A36')}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
