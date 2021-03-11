import { useState, useEffect } from 'react'
import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import ContentFormatSwitcher from 'src/components/ContentFormatSwitcher'
import Link from 'next/link'
import localStorageUtil from 'src/utils/localStorage'
import { getPopularTags } from 'src/utils/posts'

const posts = [
  {
    slug: 'javascript-set-constructor',
    title: 'JavaScript Set Contructor',
    tags: ['javascript', 'es6', 'dedupe'],
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
    title: 'Merging Defaults with Options for config',
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
    title: 'Key/Value pairs with Definition Lists',
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

const popularTags = getPopularTags(posts)

export default function Challenges() {
  const [contentFormat, setContentFormat] = useState('')

  useEffect(() => {
    setContentFormat(localStorageUtil.getContentFormat())
  })

  return (
    <Layout title="Code Challenges">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <h1 className="section-title">Code Challenges</h1>
          <p className="section-subtitle">Master the craft of code with common code challenge exercises</p>
          <p>Topics:<br/><Tags size="m" tags={popularTags.map(post => post.tag)} urlBase="/code/challenges" /></p>
          <ContentFormatSwitcher onChange={setContentFormat} />
        </section>
        <section className={`content-grid content-format-${contentFormat} content-padded`}>
          {posts.map(post => (
            <article key={post.slug} className="content-card">
              {post.thumbnail && <img src={post.thumbnail} className="content-card-image" />}
              <h2 className="content-card-title">{post.title}</h2>
              <Tags tags={post.tags} />
              <p className="content-card-description">{post.description}</p>
              <ol className="content-card-deep-links" type="I">
                {post.headers.map(header => (
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
