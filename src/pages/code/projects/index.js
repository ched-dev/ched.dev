import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import { getPopularTags } from 'src/utils/posts'

const posts = [
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

const popularTags = getPopularTags(posts)

export default function Projects() {

  return (
    <Layout title="Projects">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <h1 className="section-title">Code Projects</h1>
          <p className="section-subtitle">JavaScript Applications, Prototypes, and Playgrounds</p>
          <p className="section-tags">Topics:<br/><Tags size="m" tags={popularTags.map(post => post.tag)} urlBase="/code/live-streams" /></p>
        </section>
        <section className="project-grid content-padded">
          {posts.map(post => (
            <article key={post.slug} className="project-card">
              <header className="project-card-header">
                <h2 className="project-card-title">{post.title}</h2>
                <Tags tags={post.tags} />
                {post.thumbnail && <img src={post.thumbnail} className="project-card-image" />}
              </header>
              
              <section className="project-card-body">
                <p className="project-card-description">{post.description}</p>
                <ul className="project-card-deep-links">
                  {post.headers.map(header => (
                    <li key={header}>
                      {header}
                    </li>
                  ))}
                </ul>
                <a className="project-card-read-more" href={post.playlist} target="_blank" rel="noopener no referrer"><i className="fa fa-youtube-play" /> <span className="project-card-read-more-text">Watch <span className="hide-breakpoint-sm">Video Playback</span> on YouTube</span></a>
              </section>
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
