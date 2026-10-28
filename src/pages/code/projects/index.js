import { useState } from 'react'
import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import ProjectGallery from 'src/components/ProjectGallery'
import Lightbox from 'src/components/Lightbox'
import { getPopularTags } from 'src/utils/posts'

// Each project can have `images` (a gallery; the first one is the main shot)
// or a single legacy `thumbnail`. Gallery images live in public/projects/<slug>/.
const posts = [
  {
    slug: 'kataban',
    title: 'Kataban: A Mac kanban board for AI coding agents',
    tags: ['typescript', 'react', 'tauri', 'pocketbase', 'ai agents', 'mcp'],
    images: [
      { src: '/projects/kataban/board.png', alt: 'Kataban board with task columns', caption: 'The board: see the whole project at a glance' },
      { src: '/projects/kataban/plan-review.png', alt: 'Plan review panel with inline comments', caption: 'Plan review: read and comment on the plan before it runs' },
      { src: '/projects/kataban/changes.png', alt: 'Changes panel with a file tree and line-level diff', caption: 'Changes: review every line, then stash, sync, or commit' },
      { src: '/projects/kataban/worktrees.png', alt: 'Project settings worktrees tab', caption: 'Worktrees: every card gets its own branch and worktree' },
      { src: '/projects/kataban/column-settings.png', alt: 'Column settings dialog', caption: 'Columns: hotkey, WIP limit, permission mode, and arrival prompt' },
      { src: '/projects/kataban/mcp.png', alt: 'A follow-up request arriving through the MCP server', caption: 'MCP: any MCP client can read and write your cards' },
      { src: '/projects/kataban/files.png', alt: 'Files view with file tree and editor', caption: 'Files: browse and edit project files in a built-in editor' },
      { src: '/projects/kataban/pinned.png', alt: 'Pinned tasks strip above the status bar', caption: 'Pinned tasks follow you across every project' },
      { src: '/projects/kataban/projects.png', alt: 'Projects list showing several repos', caption: 'Projects: point Kataban at any local folder' }
    ],
    description: 'A native macOS kanban board where every card is an AI agent session. Review the plan, then run Claude Code, Codex, or OpenCode in parallel on separate git worktrees.',
    website: 'https://kataban.app',
    headers: [
      'Tauri 2 desktop app built in React, TypeScript, and Rust',
      'Columns set their own permission mode, prompt, and hotkey',
      'Each card runs on its own git branch and worktree',
      'Built-in file editor, diff review, and MCP server',
      'Multi-device sync and web app backed by PocketBase'
    ]
  },
  {
    slug: 'productbase',
    title: 'ProductBase: A SaaS starter built on PocketBase',
    tags: ['go', 'pocketbase', 'react', 'typescript', 'stripe', 'railway', 'saas'],
    images: [
      { src: '/projects/productbase/landing.png', alt: 'ProductBase landing page', caption: 'Landing page: ship your idea, not the boring parts' },
      { src: '/projects/productbase/admin-overview.png', alt: 'System Admin overview with sections for users, workspaces, billing, automations, email, notifications, files, and settings', caption: 'System Admin: every section of the platform in one place' },
      { src: '/projects/productbase/users.png', alt: 'Users list with public registration toggle', caption: 'Users: registrations, waitlist, feedback, and lockouts' },
      { src: '/projects/productbase/automations.png', alt: 'Automation flows list with event, schedule, and webhook triggers', caption: 'Automations: event, schedule, and webhook triggered flows' },
      { src: '/projects/productbase/email-templates.png', alt: 'Email templates list', caption: 'Email templates: code-defined templates with saved variables' },
      { src: '/projects/productbase/notifications.png', alt: 'Notification templates list', caption: 'Notifications: one template drives in-app and email channels' },
      { src: '/projects/productbase/billing.png', alt: 'Billing overview with customers, subscriptions, payments, and invoices', caption: 'Billing: Stripe subscriptions and products, as deployed for Kataban' },
      { src: '/projects/productbase/variables.png', alt: 'System settings variables list', caption: 'Settings: typed variables, secrets, and backups' }
    ],
    description: 'A product application with authentication, system admin, automations, email, billing, and deployment built in. Fork it and focus on what makes your product unique. Powers the backend for Kataban.',
    website: 'https://productbase.up.railway.app/',
    headers: [
      'PocketBase as a Go framework with SQLite and JS hooks',
      'React and Mantine admin with multi-tenant workspaces',
      'Stripe subscriptions, purchases, and license keys',
      'Automations with event, webhook, and cron triggers',
      'One-click deploy on Railway with versioned upgrades'
    ]
  },
  {
    slug: 'medialog',
    title: 'Medialog: A media manager for Flickr libraries',
    tags: ['typescript', 'redwoodjs', 'prisma', 'react', 'mantine', 'inngest', 'web sockets'],
    // TODO: add screenshots to public/projects/medialog/ (landscape PNG, ~1600-2200px wide, under ~600KB) then fill in
    // images: [
    //   { src: '/projects/medialog/dashboard.png', alt: 'Medialog dashboard media grid', caption: '' }
    // ],
    description: 'Syncs your Flickr photos, videos, albums, and EXIF data into Postgres with a dashboard to browse, filter, and search your library by date, tag, album, and camera.',
    // website: 'https://medialog.ched.dev', // enable once the deployment is confirmed live
    headers: [
      'RedwoodJS app with TypeScript, Prisma, and PostgreSQL',
      'Background syncs on Inngest with live WebSocket progress',
      'Search and filter by tags, albums, dates, and EXIF data',
      'Grid and list views with a per-photo EXIF panel',
      'Installable as a PWA with a Workbox service worker'
    ]
  },
  {
    slug: 'unboxed-deals',
    title: 'Unboxed Deals an Amazon Warehouse deals site',
    tags: ['typescript', 'redwoodjs', 'prisma', 'graphql', 'node.js'],
    images: [
      { src: '/projects/unboxed-deals/product-details.png', alt: 'Product details page with price history chart', caption: 'Product details: new vs used price over time' },
      { src: '/projects/unboxed-deals/home.png', alt: 'Unboxed Deals home page with recommendations by product category', caption: 'Home: watch for new or used deals from Amazon Warehouse' },
      { src: '/projects/unboxed-deals/all-deals.png', alt: 'All deals list with new price, used price, and deal score', caption: 'All deals: new vs used price with a Deal Score for every item' },
      { src: '/projects/unboxed-deals/price-charts.png', alt: 'Price history and deal score charts with a hover tooltip', caption: 'Price history: hover any day to see the deal at that time' },
      { src: '/projects/unboxed-deals/watch-list.png', alt: 'Watch list with alert thresholds per product', caption: 'Watch list: alerts by price, percent off, or Deal Score' },
      { src: '/projects/unboxed-deals/watch-product.png', alt: 'Watch a product form taking an Amazon product URL', caption: 'Watch a product: paste any Amazon URL to start tracking it' }
    ],
    description: 'A website for Amazon Warehouse deals on used and open boxed items. Running as a beta for the past year, I am currently hardening the product for public users in 2024.',
    website: 'https://unboxed.deals',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRyo_bPWNEcaKv-Sctm1iTOY',
    headers: [
      'RedwoodJS app with TypeScript, Prisma, GraphQL, and React',
      'Product pricing history and alerts',
      'Users can add new products',
      'Content articles & email marketing built in'
    ]
  },
  // {
  //   slug: 'mega-api',
  //   title: 'Mega API: A Headless CMS and Backend as a Service',
  //   tags: ['javascript', 'directus.io', 'headless cms', 'backend as a service', 'apis'],
  //   thumbnail: '/mega-api-screenshot.png',
  //   description: 'A directus.io install serving up data for several of my applications. Provides basic REST API\'s for content sites, image hosting, and automation through flows.',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRzj31CiA5HGBRwfmWXYU-Np',
  //   // source: 'https://github.com/ched-dev/obs-overlays',
  //   headers: [
  //     'Manage custom data models accessed via REST or Websockets',
  //     'Stores files in Amazon S3 for upcoming media blog',
  //     'Automates actions through flows, a low-code workflow manager',
  //     'Allows authentication and authorization per app'
  //   ]
  // },
  // {
  //   slug: 'trendlog.app',
  //   title: 'Trendlog.app a personal data tracker using tags',
  //   tags: ['typescript', 'framework 7', 'pwa', 'svelte'],
  //   thumbnail: '/tracker-screenshot.png',
  //   description: 'A progressive web app built on Framework 7 to track your personal data using tags. Recreating with a mobile-first approach from a proof-of-concept I created in 2017. Will be available to the general public.',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRytJ_tRLu6CaCQIAGYak9P0',
  //   headers: [
  //     'Framework 7 progressive web app for mobile devices',
  //     'Create entries using tags with autosuggested relations',
  //     'Aggregated reporting based on tags selected',
  //     'Custom data parsers allow extended data types'
  //   ]
  // },
  // {
  //   slug: 'shredlove',
  //   title: 'Next.js + Netlify CMS Static Site',
  //   tags: ['static site', 'next.js', 'react', 'netlify cms'],
  //   thumbnail: '/shredlove-screenshot.png',
  //   description: 'A simple content management system built to present externally hosted media on Vimeo and YouTube using some custom built inputs.',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRz_-UlSGDlLw35bHhYlj3x9',
  //   source: 'https://github.com/chadwithuhc/shredlove.com',
  //   website: 'https://shredlove.com',
  //   headers: [
  //     'Next.js provides static site generation',
  //     'Netlify CMS for Custom Input Widgets and Admin UI',
  //     'Creates embed codes for Vimeo and YouTube',
  //     'Data is stored in JSON files within the repository'
  //   ]
  // },
  // {
  //   slug: 'obs-tasks',
  //   title: 'OBS Tasks Overlay',
  //   tags: ['obs', 'next.js', 'react', 'tmi.js', 'tailwind css', 'open source'],
  //   thumbnail: '/obs-tasks-screenshot.png',
  //   description: 'A browser application to show Tasks in an OBS Browser Source, controlled via Twitch chat commands.',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRw70oamqirzMIiggPxsz6sV',
  //   source: 'https://github.com/ched-dev/obs-tasks-overlay',
  //   headers: [
  //     'Next.js boilerplate with Tailwind CSS for styling',
  //     'LocalStorage to save all data locally',
  //     'Flexible customization via query parameters in URL',
  //     'Nothing to install or download locally or on a server'
  //   ]
  // },
  // {
  //   slug: 'obs-overlays',
  //   title: 'Twitch Event and Chat Command Overlays in OBS',
  //   tags: ['obs', 'tau', 'tmi.js', 'express', 'socket.io', 'web sockets', 'esmodules'],
  //   thumbnail: '/obs-overlays-screenshot.png',
  //   description: 'A browser source for OBS to display overlays for Follow, Subscribe, Channel Redemption, etc. and chat commands (!clap) with sounds. Also includes a chat bot!',
  //   playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRw3DzXr6tOPcVIHJX32DifU',
  //   source: 'https://github.com/ched-dev/obs-overlays',
  //   headers: [
  //     'Twitch API Unifier (TAU) for Twitch Events subscriptions',
  //     'tmi.js for Chat integration and bot messages',
  //     'Configuration based listeners for Event and Chat Commands',
  //     'Client Commands for custom functionality (sounds, notifications)',
  //     'Runs locally on streamers PC'
  //   ]
  // },
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

const getImages = (post) => {
  if (post.images && post.images.length) return post.images
  if (post.thumbnail) return [{ src: post.thumbnail, alt: post.title }]
  return []
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <Layout title="Code Projects">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <div className="sticky-header">
            <h1 className="section-title">Code Projects</h1>
            <p className="section-subtitle">Desktop &amp; Web Applications, Prototypes, and side projects</p>
          </div>
          <p className="section-tags">Topics:<br/><Tags size="s" tags={popularTags.map(post => post.tag)} urlBase="/code/live-streams" /></p>
        </section>
        <section className="project-grid content-padded">
          {posts.map(post => {
            const images = getImages(post)

            return (
            <article key={post.slug} className="project-card">
              <header className="project-card-header">
                <h2 className="project-card-title">{post.title}</h2>
                <Tags tags={post.tags} />
              </header>

              <div className="project-card-content">
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
                {post.playlist && (
                  <a
                    className="project-card-read-more"
                    href={post.playlist}
                    target="_blank" rel="noopener no referrer"
                  >
                    <i className="fab fa-youtube" /> <span className="project-card-read-more-text">Watch <span className="hide-breakpoint-sm">Video Playback</span> on YouTube</span>
                  </a>
                )}
              </section>
              <ProjectGallery images={images} onOpen={index => setLightbox({ images, index })} />
              </div>
            </article>
            )
          })}
        </section>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            index={lightbox.index}
            onClose={() => setLightbox(null)}
            onNavigate={index => setLightbox({ images: lightbox.images, index })}
          />
        )}
        <Footer />
      </main>
    </Layout>
  )
}
