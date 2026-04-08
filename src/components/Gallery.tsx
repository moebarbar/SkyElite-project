import { useInView } from '../hooks/useInView'
import { useEffect, useRef, useState } from 'react'

const PHOTOS = [
  { src: 'https://i.imgur.com/sWkpHS4.jpg', alt: 'Private jet experience' },
  { src: 'https://i.imgur.com/toFLSS4.jpg', alt: 'Private jet on runway' },
  { src: 'https://i.imgur.com/iffZS7f.jpg', alt: 'Private jet exterior' },
  { src: 'https://i.imgur.com/fQXEdpx.jpg', alt: 'Private aviation' },
  { src: 'https://i.imgur.com/QDA211b.jpg', alt: 'Luxury cabin interior' },
]

// Parallax depth factor per photo — positive = up, negative = down
const FACTORS = [0.07, -0.05, 0.1, -0.08, 0.06]

export function Gallery() {
  const { ref, inView } = useInView()
  const gridRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = gridRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // offset = distance of grid center from viewport center
      setParallax(rect.top + rect.height / 2 - window.innerHeight / 2)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const imgStyle = (i: number): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    willChange: 'transform',
    transform: `translateY(${parallax * FACTORS[i]}px) scale(1.08)`,
    transition: 'transform 0.1s linear',
  })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-cream"
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

        {/* Mosaic grid — desktop */}
        <div
          ref={gridRef}
          className="hidden sm:grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.9s ease 0.1s',
          }}
        >
          {/* Photo 1 — tall left (col 1-4, rows 1-3) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '1 / 5',
              gridRow: '1 / 4',
              aspectRatio: '2/3',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease 0ms',
            }}
          >
            <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} style={imgStyle(0)} loading="lazy" />
          </div>

          {/* Photo 2 — wide top right (col 5-12, row 1) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '5 / 13',
              gridRow: '1 / 2',
              aspectRatio: '16/9',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease 120ms',
            }}
          >
            <img src={PHOTOS[1].src} alt={PHOTOS[1].alt} style={imgStyle(1)} loading="lazy" />
          </div>

          {/* Photo 3 — mid right col (col 5-8, row 2) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '5 / 9',
              gridRow: '2 / 3',
              aspectRatio: '4/3',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease 200ms',
            }}
          >
            <img src={PHOTOS[2].src} alt={PHOTOS[2].alt} style={imgStyle(2)} loading="lazy" />
          </div>

          {/* Photo 4 — far right col (col 9-12, row 2) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '9 / 13',
              gridRow: '2 / 3',
              aspectRatio: '4/3',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease 280ms',
            }}
          >
            <img src={PHOTOS[3].src} alt={PHOTOS[3].alt} style={imgStyle(3)} loading="lazy" />
          </div>

          {/* Photo 5 — compact right strip (col 5-12, row 3) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '5 / 13',
              gridRow: '3 / 4',
              aspectRatio: '16/6',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease 360ms',
            }}
          >
            <img src={PHOTOS[4].src} alt={PHOTOS[4].alt} style={imgStyle(4)} loading="lazy" />
          </div>
        </div>

        {/* Mobile: simple 2-col grid (no parallax) */}
        <div
          className="grid grid-cols-2 gap-3 sm:hidden"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.9s ease 0.2s' }}
        >
          {PHOTOS.slice(0, 4).map((photo, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl"
              style={{ aspectRatio: i === 0 ? '3/4' : '1/1' }}
            >
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
