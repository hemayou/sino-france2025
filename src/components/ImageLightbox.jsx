import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [isOpen, onClose, onPrev, onNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown, isOpen])

  if (!isOpen || !images || images.length === 0) return null

  const image = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* 关闭按钮 */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
        onClick={onClose}
      >
        <X size={28} />
      </button>

      {/* 上一张 */}
      {images.length > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-10"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
        >
          <ChevronLeft size={36} />
        </button>
      )}

      {/* 图片 */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.caption || ''}
          className="max-w-full max-h-[75vh] object-contain" loading="lazy"
        />
        {image.caption && (
          <p className="text-white/80 text-sm mt-4 text-center max-w-2xl px-4">
            {image.caption}
          </p>
        )}
        {images.length > 1 && (
          <p className="text-white/40 text-xs mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>

      {/* 下一张 */}
      {images.length > 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-10"
          onClick={(e) => { e.stopPropagation(); onNext() }}
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  )
}
