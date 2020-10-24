import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'
import Link from 'next/link'

const bits = [
  {
    slug: 'definition-lists',
    title: 'Key/Value pairs with Definition Lists',
    tags: ['semantic html', 'key value'],
    description: 'Display Key / Value pairs on the page using Definition List `<dl>` element',
    headers: [
      'Why a Definition List over X, Y, Z?',
      'Alternative ways to build a Key/Value list'
    ]
  },
  {
    slug: 'javascript-set-constructor',
    title: 'JavaScript Set Contructor',
    tags: ['javascript', 'es6', 'dedupe'],
    description: 'Explore use cases for the JavaScript Set Contructor as well as limitation and gotchas.',
    headers: [
      'What is the purpose of `Set`?',
      'Is `Set` supported?',
      'How can I deduplicate with a `Set`?',
      '`Set` Gotchas'
    ]
  },
]

export default function Home() {
  return (
    <Layout title="Home">
      <MainNav />
      <main className="content-container">
        <section className="content-grid">
          {bits.map(bit => (
            <article key={bit.slug} className="content-card">
              <img src="/code-sample-screenshot.png" className="content-card-image" />
              <h2 className="content-card-title">{bit.title}</h2>
              <p className="content-tags">{bit.tags.map(tag => <span key={tag} className="content-tags-tag">{tag}</span>)}</p>
              <p className="content-card-description">{bit.description}</p>
              <ul className="content-card-deep-links">
                {bit.headers.map(header => (
                  <li key={header}>
                    <Link href="#"><a>{header}</a></Link>
                  </li>
                ))}
              </ul>
              <Link href="#"><a>Continue Reading &gt;</a></Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  )
}
