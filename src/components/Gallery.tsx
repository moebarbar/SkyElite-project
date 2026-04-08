import { useInView } from '../hooks/useInView'
import { useEffect, useRef, useState } from 'react'

const PHOTOS = [
  { src: 'https://i.imgur.com/sWkpHS4.jpg', alt: 'Private jet cabin interior' },
  { src: 'https://i.imgur.com/toFLSS4.jpg', alt: 'Passenger in private jet' },
  { src: 'https://i.imgur.com/iffZS7f.jpg', alt: 'Private jet on runway' },
  { src: 'https://i.imgur.com/fQXEdpx.jpg', alt: 'Private jet at sunset' },
  { src: 'https://i.imgur.com/QDA211b.jpg', alt: 'Luxury cabin interior' },
  { src: 'https://i.imgur.com/ddR3Vdp.jpg', alt: 'Private jet exterior detail' },
]

const FACTORS = [0.04, -0.03, 0.05, -0.04, 0.03, -0.04]

export function Gallery() {
  const { ref, inView } = useInView()
  const gridRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = gridRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setParallax(rect.top + rect.height / 2 - window.innerHeight / 2)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const img = (i: number, objectPosition = 'center') => (
    <img
      src={PHOTOS[i].src}
      alt={PHOTOS[i].alt}
      loading="lazy"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
        willChange: 'transform',
        transform: `translateY(${parallax * FACTORS[i]}px) scale(1.08)`,
        transition: 'transform 0.1s linear',
      }}
    />
  )

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-cream overflow-hidden"
      aria-label="Gallery"
    >
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-4 mb-10 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)' }}
        >
          <div className="h-px w-8" style={{ background: '#8B6C1A' }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: '#8B6C1A' }}>
            The Experience
          </span>
        </div>

        {/* Desktop: two independent flex columns — no grid-row conflicts */}
        <div
          ref={gridRef}
          className="hidden sm:flex gap-3"
          style={{
            height: 'clamp(520px, 62vh, 720px)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.9s ease 0.1s',
          }}
        >
          {/* Left column — 38% */}
          <div className="flex flex-col gap-3" style={{ width: '38%' }}>
            {/* Photo 1 — tall, fills most of height */}
            <div className="overflow-hidden rounded-2xl flex-1">
              {img(0)}
            </div>
            {/* Photo 6 — fills remaining left-column space, face visible at top */}
            <div className="overflow-hidden rounded-2xl flex-1">
              {img(5, 'center center')}
            </div>
          </div>

          {/* Right column — fills remaining space */}
          <div className="flex flex-col gap-3 flex-1">
            {/* Photo 2 — wide top */}
            <div
              className="overflow-hidden rounded-2xl flex-shrink-0"
              style={{ height: 'clamp(180px, 26vh, 300px)' }}
            >
              {img(1)}
            </div>
            {/* Photos 3 + 4 — side by side, fills middle */}
            <div className="flex gap-3 flex-1">
              <div className="overflow-hidden rounded-2xl flex-1">{img(2)}</div>
              <div className="overflow-hidden rounded-2xl flex-1">{img(3)}</div>
            </div>
            {/* Photo 5 — compact strip at bottom */}
            <div
              className="overflow-hidden rounded-2xl flex-shrink-0"
              style={{ height: 'clamp(120px, 16vh, 180px)' }}
            >
              {img(4)}
            </div>
          </div>
        </div>

        {/* Mobile: simple 2-col grid */}
        <div
          className="grid grid-cols-2 gap-3 sm:hidden"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.9s ease 0.2s' }}
        >
          {PHOTOS.slice(0, 4).map((photo, i) => (
            <div key={i} className="overflow-hidden rounded-xl" style={{ aspectRatio: i === 0 ? '3/4' : '1/1' }}>
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
          <div className="col-span-2 overflow-hidden rounded-xl" style={{ aspectRatio: '16/7' }}>
            <img src={PHOTOS[4].src} alt={PHOTOS[4].alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

      </div>
    </section>
  )
}
