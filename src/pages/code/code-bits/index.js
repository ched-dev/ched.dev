import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import Link from 'next/link'

const bits = [
  {
    slug: 'definition-lists',
    title: 'Key/Value pairs with Definition Lists',
    tags: ['semantic html', 'key value'],
    thumbnail: '/code-sample-screenshot.png',
    description: 'Display Key / Value pairs on the page using Definition List `<dl>` element',
    headers: [
      'Why a Definition List over X, Y, Z?',
      'Is it accessible?',
      'Alternative ways to build a Key/Value list'
    ]
  },
  {
    slug: 'javascript-set-constructor',
    title: 'JavaScript Set Contructor',
    tags: ['javascript', 'es6', 'dedupe'],
    thumbnail: '/code-sample-screenshot-2.png',
    description: 'Explore use cases for the JavaScript Set Contructor as well as limitation and gotchas.',
    headers: [
      'What is the purpose of `Set`?',
      'Is `Set` supported?',
      'How can I deduplicate with a `Set`?',
      '`Set` Gotchas'
    ]
  },
  {
    slug: 'merging-defaults-with-options-for-config',
    title: 'Merging Defaults with Options for config',
    tags: ['javascript', 'es6', 'objects', 'config'],
    thumbnail: '/code-sample-screenshot-3.png',
    description: 'We will commonly merge a set of options with a set of default options. Our end goal is to get a configuration.',
    headers: [
      'Example Scenarios',
      'The old way, the new way, the best way?',
      'Understanding shallow vs deep merging',
      'Gotchas'
    ]
  }
]

const tagCountsByLabel = bits.reduce((tagCounts, bit) => {
  bit.tags.map(tag => {
    // assuming tags casing is consistent
    if (!tagCounts.hasOwnProperty(tag)) {
      tagCounts[tag] = 0
    }

    tagCounts[tag]++
  })

  return tagCounts
}, {})
const codeBitTags = Object.keys(tagCountsByLabel).map(tag => ({
  tag,
  count: tagCountsByLabel[tag]
})).sort((a, b) => b.count - a.count)
// console.log('codeBitTags', codeBitTags)

export default function CodeBits() {
  return (
    <Layout title="Code Bits">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <h1 className="section-title">Code Bits</h1>
          <p className="section-subtitle">Bits you won't want to code without.</p>
          <p>Topics:<br/><Tags size="m" tags={codeBitTags.map(bit => bit.tag)} urlBase="/code/code-bits" /></p>
        </section>
        <section className="content-grid">
          {bits.map(bit => (
            <article key={bit.slug} className="content-card">
              <img src={bit.thumbnail} className="content-card-image" />
              <h2 className="content-card-title">{bit.title}</h2>
              <p><Tags tags={bit.tags} /></p>
              <p className="content-card-description">{bit.description}</p>
              <ol className="content-card-deep-links" type="I">
                {bit.headers.map(header => (
                  <li key={header}>
                    <Link href="#"><a>{header}</a></Link>
                  </li>
                ))}
              </ol>
              <Link href="#"><a>Continue Reading &gt;</a></Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  )
}
