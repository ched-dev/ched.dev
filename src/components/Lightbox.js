import { useEffect } from 'react'

export default function Lightbox({ images = [], index = 0, onClose, onNavigate }) {
  const image = images[index]
  const hasMany = images.length > 1
  const prevIndex = (index - 1 + images.length) % images.length
  const nextIndex = (index + 1) % images.length

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (hasMany && event.key === 'ArrowRight') onNavigate(nextIndex)
      if (hasMany && event.key === 'ArrowLeft') onNavigate(prevIndex)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [hasMany, nextIndex, prevIndex, onClose, onNavigate])

  if (!image) return null

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={image.alt}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        <i className="fa fa-times" />
      </button>
      {hasMany && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav-prev"
          onClick={(event) => { event.stopPropagation(); onNavigate(prevIndex) }}
          aria-label="Previous image"
        >
          <i className="fa fa-chevron-left" />
        </button>
      )}
      <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="lightbox-image" />
        <figcaption className="lightbox-caption">
          {image.caption || image.alt}
          {hasMany && <span className="lightbox-count">{index + 1} / {images.length}</span>}
        </figcaption>
      </figure>
      {hasMany && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav-next"
          onClick={(event) => { event.stopPropagation(); onNavigate(nextIndex) }}
          aria-label="Next image"
        >
          <i className="fa fa-chevron-right" />
        </button>
      )}
    </div>
  )
}
