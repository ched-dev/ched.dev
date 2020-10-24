import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'

const bits = [
  { slug: 'definition-lists', title: 'Definition Lists', tags: ['semantic html', 'key value'] },
  { slug: 'javascript-set-constructor', title: 'JavaScript Set Contructor', tags: ['javascript', 'es6', 'dedupe'] }
]

export default function Home() {
  return (
    <Layout title="Home">
      <MainNav />
      <main className="content-container">
        <section className="content-grid">
          {bits.map(bit => (
            <article key={bit.slug} className="content-card">
              <h2 className="content-card-title">{bit.title}</h2>
              <p className="content-tags">{bit.tags.map(tag => <span key={tag} className="content-tags-tag">{tag}</span>)}</p>
              <img src="/code-sample-screenshot.png" className="content-card-image" />
            </article>
          ))}
        </section>
      </main>
    </Layout>
  )
}
