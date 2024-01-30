import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import { getPopularTags } from 'src/utils/posts'

const posts = [
  {
    slug: 'unboxed-deals',
    title: 'Unboxed Deals an Amazon Warehouse deals site',
    tags: ['typescript', 'redwoodjs', 'prisma', 'graphql', 'node.js'],
    thumbnail: '/unboxed-deals-screenshot.png',
    description: 'A website for Amazon Warehouse deals on used and open boxed items. Running as a beta for the past year, I am currently hardening the product for public users in 2024.',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRyo_bPWNEcaKv-Sctm1iTOY',
    headers: [
      'RedwoodJS app with TypeScript, Prisma, GraphQL, and React',
      'Product pricing history and alerts',
      'Users can add new products',
      'Content articles & email marketing built in'
    ]
  },
  {
    slug: 'mega-api',
    title: 'Mega API: A Headless CMS and Backend as a Service',
    tags: ['javascript', 'directus.io', 'headless cms', 'backend as a service', 'apis'],
    thumbnail: '/mega-api-screenshot.png',
    description: 'A directus.io install serving up data for several of my applications. Provides basic REST API\'s for content sites, image hosting, and automation through flows.',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRzj31CiA5HGBRwfmWXYU-Np',
    // source: 'https://github.com/ched-dev/obs-overlays',
    headers: [
      'Manage custom data models accessed via REST or Websockets',
      'Stores files in Amazon S3 for upcoming media blog',
      'Automates actions through flows, a low-code workflow manager',
      'Allows authentication and authorization per app'
    ]
  },
  {
    slug: 'trendlog.app',
    title: 'Trendlog.app a personal data tracker using tags',
    tags: ['typescript', 'framework 7', 'pwa', 'svelte'],
    thumbnail: '/tracker-screenshot.png',
    description: 'A progressive web app built on Framework 7 to track your personal data using tags. Recreating with a mobile-first approach from a proof-of-concept I created in 2017. Will be available to the general public.',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRytJ_tRLu6CaCQIAGYak9P0',
    headers: [
      'Framework 7 progressive web app for mobile devices',
      'Create entries using tags with autosuggested relations',
      'Aggregated reporting based on tags selected',
      'Custom data parsers allow extended data types'
    ]
  },
  {
    slug: 'shredlove',
    title: 'Next.js + Netlify CMS Static Site',
    tags: ['static site', 'next.js', 'react', 'netlify cms'],
    thumbnail: '/shredlove-screenshot.png',
    description: 'A simple content management system built to present externally hosted media on Vimeo and YouTube using some custom built inputs.',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRz_-UlSGDlLw35bHhYlj3x9',
    source: 'https://github.com/chadwithuhc/shredlove.com',
    website: 'https://shredlove.com',
    headers: [
      'Next.js provides static site generation',
      'Netlify CMS for Custom Input Widgets and Admin UI',
      'Creates embed codes for Vimeo and YouTube',
      'Data is stored in JSON files within the repository'
    ]
  },
  {
    slug: 'obs-tasks',
    title: 'OBS Tasks Overlay',
    tags: ['obs', 'next.js', 'react', 'tmi.js', 'tailwind css', 'open source'],
    thumbnail: '/obs-tasks-screenshot.png',
    description: 'A browser application to show Tasks in an OBS Browser Source, controlled via Twitch chat commands.',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRw70oamqirzMIiggPxsz6sV',
    source: 'https://github.com/ched-dev/obs-tasks-overlay',
    headers: [
      'Next.js boilerplate with Tailwind CSS for styling',
      'LocalStorage to save all data locally',
      'Flexible customization via query parameters in URL',
      'Nothing to install or download locally or on a server'
    ]
  },
  {
    slug: 'obs-overlays',
    title: 'Twitch Event and Chat Command Overlays in OBS',
    tags: ['obs', 'tau', 'tmi.js', 'express', 'socket.io', 'web sockets', 'esmodules'],
    thumbnail: '/obs-overlays-screenshot.png',
    description: 'A browser source for OBS to display overlays for Follow, Subscribe, Channel Redemption, etc. and chat commands (!clap) with sounds. Also includes a chat bot!',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRw3DzXr6tOPcVIHJX32DifU',
    source: 'https://github.com/ched-dev/obs-overlays',
    headers: [
      'Twitch API Unifier (TAU) for Twitch Events subscriptions',
      'tmi.js for Chat integration and bot messages',
      'Configuration based listeners for Event and Chat Commands',
      'Client Commands for custom functionality (sounds, notifications)',
      'Runs locally on streamers PC'
    ]
  },
  // {
  //   slug: 'warehouse-deals',
  //   title: 'Warehouse Deals',
  //   tags: ['javascript', 'next.js', 'node.js', 'heroku', 'cheerio'],
  //   thumbnail: '/warehouse-deals-screenshot.png',
  //   description: 'An Amazon Product Price Scanner to watch for new and used deals by target price',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRwTsubtXe0OR4bdswKL39F-',
  //   headers: [
  //     'Next.js application with Node.js API endpoints',
  //     'Heroku Scheduler pings hourly for prices',
  //     'Page scraping with cheerio',
  //     'Text message alerting for target price'
  //   ]
  // },
  // {
  //   slug: 'markdown-content-api',
  //   title: 'Markdown Content API',
  //   tags: ['javascript', 'feathers js', 'node.js', 'next.js'],
  //   thumbnail: '/markdown-content-api-screenshot.png',
  //   description: 'A Markdown Content API as a Headless CMS for my portfolio site. Goal is to consume content into this site.',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRyDjp3JoiHvAudfRhalmrsg',
  //   headers: [
  //     'Feathers JS API backend connected to MongoDB',
  //     'Next.js application for Content UI',
  //     'Store data in Notebooks and Pages with nesting support',
  //     'Serves HTML result from Markdown contents'
  //   ]
  // },
  // {
  //   slug: 'codepow',
  //   title: 'CodePow.io Component Library',
  //   tags: ['react', 'tailwind css', 'typescript', 'documentation'],
  //   thumbnail: '/codepow-screenshot.png',
  //   description: 'A UI Style Guide and Component library for the CodePow.io website based on a Design System.',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRzmGPrfHebPfRHkORNgy_9Y',
  //   website: 'https://codepow.io/styles',
  //   headers: [
  //     'UI Components built in React, TypeScript, and Tailwind CSS',
  //     'Documentation website with code samples and previews',
  //     'Built from an Adobe XD Design Spec',
  //     'A copy/pasters dream!'
  //   ]
  // },
  // {
  //   slug: 'studybook-app',
  //   title: 'Studybook App',
  //   tags: ['javascript', 'es6', 'api', 'postgres', 'knex', 'oauth', 'react'],
  //   thumbnail: '/studybook-screenshot.png',
  //   description: 'A notebook for studying Terms, Questions, and Answers',
  //   headers: [
  //     'Associate related Terms, Topics and Questions through an interface',
  //     'Implements a beginner friendly API with Postgres and Knex',
  //     'Public and Private notebooks available with Github Auth',
  //     'Administrative tools to easily manage missing data'
  //   ]
  // },
  // {
  //   slug: 'open-source-css-color-picker',
  //   title: 'CSS Color Picker Component',
  //   tags: ['open source', 'css', 'component', 'javascript'],
  //   thumbnail: '/css3-colorpicker-screenshot.png',
  //   description: 'An Open Source CSS Color Picker Component with bindings for React',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRwXj6px1bHcSh6HHo94zKKu',
  //   source: 'https://github.com/chadwithuhc/css3-color-picker',
  //   headers: [
  //     'Written with vanilla JS for flexible embedding',
  //     'Add to React applications with included wrapper component',
  //     'Pass in your own color set or use CSS3 colors',
  //     'Configurable options for ease of use'
  //   ]
  // },
]

const popularTags = getPopularTags(posts)

export default function Projects() {

  return (
    <Layout title="Code Projects">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <div className="sticky-header">
            <h1 className="section-title">Code Projects</h1>
            <p className="section-subtitle">JavaScript Web Applications, Prototypes, and side projects</p>
          </div>
          <p className="section-tags">Topics:<br/><Tags size="s" tags={popularTags.map(post => post.tag)} urlBase="/code/live-streams" /></p>
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
                {post.website && (
                  <a
                    className="project-card-read-more"
                    href={post.website}
                    target="_blank" rel="noopener no referrer"
                  >
                    <i className="fa fa-paperclip" /> <span className="project-card-read-more-text">View Website</span>
                  </a>
                )}
                {post.source && (
                  <a
                    className="project-card-read-more"
                    href={post.source}
                    target="_blank" rel="noopener no referrer"
                  >
                    <i className="fa fa-code-branch" /> <span className="project-card-read-more-text">View Source</span>
                  </a>
                )}
                <a
                  className="project-card-read-more"
                  href={post.playlist}
                  target="_blank" rel="noopener no referrer"
                >
                  <i className="fab fa-youtube" /> <span className="project-card-read-more-text">Watch <span className="hide-breakpoint-sm">Video Playback</span> on YouTube</span>
                </a>
              </section>
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
