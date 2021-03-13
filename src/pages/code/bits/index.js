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
    id: '1.0',
    slug: 'introduction-the-journey-of-learning-to-code',
    title: 'Introduction: The journey of learning to code',
    tags: ['learning', 'studying', 'code'],
  },
  {
    id: '2.0',
    slug: 'data-in-your-application',
    title: 'Managing Data in your Application',
    tags: ['javascript', 'es6', 'dedupe'],
    children: [
      {
        id: '2.1',
        slug: 'javascript-set-constructor',
        title: 'JavaScript Set Contructor',
        tags: ['javascript', 'es6', 'dedupe'],
      },
    ]
  },
  {
    id: '3.0',
    slug: 'writing-configurable-code',
    title: 'Writing Configurable Code',
    tags: ['javascript', 'es6', 'objects', 'config'],
    children: [
      {
        id: '3.1',
        slug: 'merging-defaults-with-options-for-config',
        title: 'Merging Defaults with Options for config',
        tags: ['javascript', 'es6', 'objects', 'config'],
      },
    ]
  },
  {
    id: '4.0',
    slug: 'writing-common-components',
    title: 'Writing Common Components',
    tags: ['user interface', 'components', 'semantic html'],
    children: [
      {
        id: '4.0.1',
        slug: 'definition-lists',
        title: 'Key/Value pairs with Definition Lists',
        tags: ['semantic html', 'key value'],
      },
    ]
  },
]

const popularTags = getPopularTags(posts)

export default function CodeBits() {
  const [contentFormat, setContentFormat] = useState('')

  useEffect(() => {
    setContentFormat(localStorageUtil.getContentFormat())
  })

  return (
    <Layout title="Code in Bits">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <h1 className="section-title">Code in Bits</h1>
          <p className="section-subtitle">A guide of bits needed for building UI's and prototyping in JavaScript</p>
          <p className="section-tags">Topics:<br/><Tags size="m" tags={popularTags.map(post => post.tag)} urlBase="/code/bits" /></p>
          {/* <ContentFormatSwitcher onChange={setContentFormat} /> */}
        </section>
        <section className={`content-grid content-format-${contentFormat} content-padded`}>
          {posts.map(post => (
            <article key={post.slug} className="content-card">
              {post.thumbnail && <img src={post.thumbnail} className="content-card-image" />}
              <h2 className="content-card-title"><span className="content-card-id">{post.id}</span> {post.title}</h2>
              <Tags tags={post.tags} />
              {post.children && post.children.length && (
                <button className="content-card-actions button">{post.children.length} Articles <i className="fa fa-angle-down" /></button>
              )}
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
