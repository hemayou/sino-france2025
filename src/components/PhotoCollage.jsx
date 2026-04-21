import { useState, useCallback } from 'react'
import ImageLightbox from './ImageLightbox'

// 更紧凑的 aspect ratio，让照片更密更小
const aspectRatios = [
  '3/4', '4/3', '2/3', '1/1', '3/5', '5/3', '4/5', '5/4',
  '2/3', '3/4', '1/1', '4/5', '3/5', '5/4', '4/3', '3/4',
]

export default function PhotoCollage({ photos, side = 'left' }) {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 })

  const openLightbox = (index) => setLightbox({ isOpen: true, index })
  const closeLightbox = () => setLightbox({ isOpen: false, index: 0 })
  const prev = () => setLightbox(l => ({ ...l, index: Math.max(0, l.index - 1) }))
  const next = () => setLightbox(l => ({ ...l, index: Math.min(photos.length - 1, l.index + 1) }))

  if (!photos || photos.length === 0) return null

  return (
    <>
      {/* 马赛克瀑布流容器 */}
      <div className="h-full">
        <div className="columns-2 gap-[3px]">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="block w-full break-inside-avoid mb-[3px] relative group overflow-hidden bg-gray-100"
            >
              <div style={{ aspectRatio: aspectRatios[i % aspectRatios.length] }}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={photos}
        currentIndex={lightbox.index}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
