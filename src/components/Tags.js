import Link from 'next/link'

export default function Tags({ tags = [], urlBase = '/tags', size = 's' }) {
  return (
    <span className={`content-tags size-${size}`}>
      {tags.map(tag => (
        // <Link href={`${urlBase}/${tag}`} key={tag}>
          <a className="content-tags-tag">{tag}</a>
        // </Link>
      ))}
    </span>
  )
}