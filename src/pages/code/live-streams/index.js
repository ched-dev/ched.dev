import { useState, useEffect } from 'react'
import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import ContentFormatSwitcher from 'src/components/ContentFormatSwitcher'
import Link from 'next/link'
import localStorageUtil from 'src/utils/localStorage'

const bits = [
  {
    slug: 'javascript-set-constructor',
    title: 'Warehouse Deals',
    tags: ['javascript', 'nextjs', 'heroku'],
    thumbnail: '/javascript-set-sample.png',
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
    title: 'Studybook',
    tags: ['javascript', 'es6', 'objects', 'config'],
    thumbnail: '/merging-defaults-sample.png',
    description: 'We will commonly merge a set of options with a set of default options. Our end goal is to get a configuration.',
    headers: [
      'Example Scenarios',
      'The old way, the new way, the best way?',
      'Understanding shallow vs deep merging',
      'Gotchas'
    ]
  },
  {
    slug: 'definition-lists',
    title: 'CSS Color Picker',
    tags: ['semantic html', 'key value'],
    // thumbnail: '/code-sample-screenshot.png',
    description: 'Display Key / Value pairs on the page using Definition List `<dl>` element',
    headers: [
      'Why a Definition List over X, Y, Z?',
      'Is it accessible?',
      'Alternative ways to build a Key/Value list'
    ]
  },
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
  const [contentFormat, setContentFormat] = useState('')

  useEffect(() => {
    setContentFormat(localStorageUtil.getContentFormat())
  })

  return (
    <Layout title="Code Bits">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <h1 className="section-title">Coding Live Streams</h1>
          <p className="section-subtitle">Twitch Live Streams of Applications, Prototypes, and Playgrounds</p>
          <p>Topics:<br/><Tags size="m" tags={codeBitTags.map(bit => bit.tag)} urlBase="/code/live-streams" /></p>
          <ContentFormatSwitcher onChange={setContentFormat} />
        </section>
        <section className={`content-grid content-format-${contentFormat} content-padded`}>
          {bits.map(bit => (
            <article key={bit.slug} className="content-card">
              {bit.thumbnail && <img src={bit.thumbnail} className="content-card-image" />}
              <h2 className="content-card-title">{bit.title}</h2>
              <Tags tags={bit.tags} />
              <p className="content-card-description">{bit.description}</p>
              <ol className="content-card-deep-links" type="I">
                {bit.headers.map(header => (
                  <li key={header}>
                    <Link href="#"><a>{header}</a></Link>
                  </li>
                ))}
              </ol>
              <Link href="#"><a className="content-card-read-more">Continue Reading &gt;</a></Link>
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
