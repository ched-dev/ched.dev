import { useState, useEffect } from 'react'
import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import Link from 'next/link'
import localStorageUtil from 'src/utils/localStorage'
import { getPopularTags } from 'src/utils/posts'
import datastore from 'src/data/store'

const posts = [
  {
    id: '1.0',
    slug: 'introduction-the-journey-of-learning-to-code',
    title: 'Introduction: The journey of learning to code',
    tags: ['learning', 'studying', 'code'],
    children: [
      {
        id: '1.1',
        title: 'My Process of writing Code',
        tags: ['javascript', 'es6', 'dedupe'],
      },
      {
        id: '1.2',
        title: 'My Process of refactoring Code',
        tags: ['javascript', 'es6', 'dedupe'],
      },
    ]
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
  const [expandedPosts, setExpandedPosts] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setContentFormat(localStorageUtil.getContentFormat())
  })

  useEffect(async () => {
    const result = await datastore.pages.find({})
    console.log('pages', result.data)
    setPosts(result.data)
  }, [])

  const expandArticles = (post) => {
    if (expandedPosts.includes(post._id)) {
      setExpandedPosts(expandedPosts.filter(id => id !== post._id))
    } else {
      setExpandedPosts(expandedPosts.concat(post._id))
    }
  }

  return (
    <Layout title="Code in Bits">
      <MainNav />
      <main className="articles-container">
        <section className="section-header">
          <h1 className="section-title">Code in Bits</h1>
          <p className="section-subtitle">A guide of bits needed for building UI's and prototyping in JavaScript</p>
          <p className="section-tags">Topics:<br/><Tags size="m" tags={popularTags.map(post => post.tag)} urlBase="/code/bits" /></p>
          {/* <ContentFormatSwitcher onChange={setContentFormat} /> */}
        </section>
        <section className={`articles-grid articles-format-${contentFormat} articles-padded`}>
          {posts.map(post => (
            <article key={post.slug} className="articles-card">
              {post.thumbnail && <img src={post.thumbnail} className="articles-card-image" />}
              <h2 className="articles-card-title"><span className="articles-card-id">{post.id}</span> {post.name}</h2>
              <Tags tags={post.tags} />
              {post.children && post.children.length && (
                <details className="articles-card-details">
                  <summary className="articles-card-actions button" onClick={() => expandArticles(post)}>
                    {post.children.length} Articles <i className={`fa fa-angle-${expandedPosts.includes(post._id) ? 'up' : 'down'}`} />
                  </summary>

                  <section className="articles-card-link-list">
                    {post.children.map(article => (
                      <Link href={'#'} key={article._id}>
                        <a className="articles-card-link-list-link">
                          <span className="articles-card-id">{article.id}</span> {article.name}
                        </a>
                      </Link>
                    ))}
                  </section>
                </details>
              )}
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
