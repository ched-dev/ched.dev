export default function ProjectGallery({ images = [], onOpen }) {
  if (!images.length) return null

  const [primary, ...rest] = images

  return (
    <div className="project-gallery">
      <button
        type="button"
        className="project-gallery-primary"
        onClick={() => onOpen(0)}
        aria-label={`View larger: ${primary.alt}`}
      >
        <img src={primary.src} alt={primary.alt} loading="lazy" />
        <span className="project-gallery-expand" aria-hidden="true"><i className="fa fa-expand" /></span>
      </button>
      {rest.length > 0 && (
        <div className="project-gallery-thumbs">
          {rest.map((image, i) => (
            <button
              type="button"
              key={image.src}
              className="project-gallery-thumb"
              onClick={() => onOpen(i + 1)}
              aria-label={`View larger: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
