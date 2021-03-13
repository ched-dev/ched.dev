import { useState, useEffect } from 'react'
import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import Link from 'next/link'

const bits = [
  {
    slug: 'warehouse-deals',
    title: 'Warehouse Deals',
    tags: ['javascript', 'nextjs', 'nodejs', 'heroku', 'cheerio'],
    thumbnail: '/warehouse-deals-screenshot.png',
    description: 'An Amazon Product Price Scanner to watch for new and used deals',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRwTsubtXe0OR4bdswKL39F-',
    headers: [
      'Next.js application with Node.js API endpoints',
      'Heroku Scheduler pings hourly for prices',
      'Page scraping with cheerio',
      'Text message alerting for target price'
    ]
  },
  {
    slug: 'studybook-app',
    title: 'Studybook App',
    tags: ['javascript', 'es6', 'api', 'postgres', 'knex', 'oauth', 'react'],
    thumbnail: '/studybook-screenshot.png',
    description: 'A notebook for studying Terms, Questions, and Answers',
    headers: [
      'Associate related Terms, Topics and Questions through an interface',
      'Implements a beginner friendly API with Postgres and Knex',
      'Public and Private notebooks available with Github Auth',
      'Administrative tools to easily manage missing data'
    ]
  },
  {
    slug: 'open-source-css-color-picker',
    title: 'CSS Color Picker Component',
    tags: ['open source', 'css', 'component', 'javascript'],
    thumbnail: '/css3-colorpicker-screenshot.png',
    description: 'An Open Source CSS Color Picker Component with bindings for React',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRwXj6px1bHcSh6HHo94zKKu',
    headers: [
      'Written with vanilla JS for flexible embedding',
      'Add to React applications with included wrapper component',
      'Pass in your own color set or use CSS3 colors',
      'Configurable options for ease of use'
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

export default function LiveStreams() {

  return (
    <Layout title="Live Streams">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <h1 className="section-title">Coding Live Streams</h1>
          <p className="section-subtitle">Twitch Live Streams of Applications, Prototypes, and Playgrounds</p>
          <p className="section-tags">Topics:<br/><Tags size="m" tags={codeBitTags.map(bit => bit.tag)} urlBase="/code/live-streams" /></p>
        </section>
        <section className="project-grid content-padded">
          {bits.map(bit => (
            <article key={bit.slug} className="project-card">
              <header className="project-card-header">
                <h2 className="project-card-title">{bit.title}</h2>
                <Tags tags={bit.tags} />
                {bit.thumbnail && <img src={bit.thumbnail} className="project-card-image" />}
              </header>
              
              <section className="project-card-body">
                <p className="project-card-description">{bit.description}</p>
                <ul className="project-card-deep-links">
                  {bit.headers.map(header => (
                    <li key={header}>
                      {header}
                    </li>
                  ))}
                </ul>
                <a className="project-card-read-more" href={bit.playlist} target="_blank" rel="noopener no referrer"><i className="fa fa-youtube-play" /> <span>Watch Playback on YouTube</span></a>
              </section>
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
