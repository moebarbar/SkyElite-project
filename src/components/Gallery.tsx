import { useInView } from '../hooks/useInView'

const PHOTOS = [
  {
    src: 'https://i.imgur.com/sWkpHS4.jpg',
    alt: 'Private jet experience',
    aspect: 'tall',
  },
  {
    src: 'https://i.imgur.com/toFLSS4.jpg',
    alt: 'Private jet on runway',
    aspect: 'wide',
  },
  {
    src: 'https://i.imgur.com/iffZS7f.jpg',
    alt: 'Private jet exterior',
    aspect: 'tall',
  },
  {
    src: 'https://i.imgur.com/fQXEdpx.jpg',
    alt: 'Private aviation',
    aspect: 'wide',
  },
  {
    src: 'https://i.imgur.com/QDA211b.jpg',
    alt: 'Luxury cabin interior',
    aspect: 'tall',
  },
]

export function Gallery() {
  const { ref, inView } = useInView()

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

        {/* Mosaic grid */}
        <div
          className="grid gap-3"
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
              transition: 'transform 0.6s ease 0ms',
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            <img
              src={PHOTOS[0].src}
              alt={PHOTOS[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Photo 2 — wide top right (col 5-12, row 1) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '5 / 13',
              gridRow: '1 / 2',
              aspectRatio: '16/9',
              transition: 'transform 0.6s ease 120ms',
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            <img
              src={PHOTOS[1].src}
              alt={PHOTOS[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Photo 3 — mid right col (col 5-8, row 2) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '5 / 9',
              gridRow: '2 / 3',
              aspectRatio: '4/3',
              transition: 'transform 0.6s ease 200ms',
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            <img
              src={PHOTOS[2].src}
              alt={PHOTOS[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Photo 4 — far right col (col 9-12, row 2) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '9 / 13',
              gridRow: '2 / 3',
              aspectRatio: '4/3',
              transition: 'transform 0.6s ease 280ms',
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            <img
              src={PHOTOS[3].src}
              alt={PHOTOS[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Photo 5 — compact right strip (col 5-12, row 3) */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              gridColumn: '5 / 13',
              gridRow: '3 / 4',
              aspectRatio: '16/6',
              transition: 'transform 0.6s ease 360ms',
              transform: inView ? 'none' : 'translateY(24px)',
            }}
          >
            <img
              src={PHOTOS[4].src}
              alt={PHOTOS[4].alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile: simple 2-col grid */}
        <div
          className="grid grid-cols-2 gap-3 mt-3 sm:hidden"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.9s ease 0.2s',
          }}
        >
          {PHOTOS.slice(0, 4).map((photo, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl"
              style={{ aspectRatio: i === 0 ? '3/4' : '1/1' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          {/* Photo 5 — full width on mobile */}
          <div
            className="col-span-2 overflow-hidden rounded-xl"
            style={{ aspectRatio: '16/7' }}
          >
            <img
              src={PHOTOS[4].src}
              alt={PHOTOS[4].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
