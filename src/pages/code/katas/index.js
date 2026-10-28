import { useState } from 'react'
import Layout from 'src/components/Layout'
import Footer from 'src/components/Footer'
import MainNav from 'src/components/MainNav'
import Tags from 'src/components/Tags'
import ProjectGallery from 'src/components/ProjectGallery'
import Lightbox from 'src/components/Lightbox'
import { getPopularTags } from 'src/utils/posts'

const posts = [
  {
    slug: 'code-katas',
    title: 'Live Coding & Refactoring Solutions',
    tags: ['javascript', 'testing', 'debugging'],
    thumbnail: '/code-katas.png',
    description: 'Solve code katas with us live on stream. We\'re starting at the 8 kyu (easiest) and working our way up. In the future, we will look into creating our own katas to share on the platform.',
    playlist: 'https://www.youtube.com/playlist?list=PLDPa5Jo5XXRwpofeCCv_4E25t7T2-e2e7'
  },
  {
    slug: 'code-katas-suggestions',
    title: 'Code Katas Suggestion List',
    tags: ['javascript', 'learning', 'training'],
    thumbnail: '/code-katas-list.png',
    description: 'A list of suggested code katas with core programming skills and real world scenarios. Also includes tips to keep in mind while training. Our list will primarily target 8 kyu (easiest) to 5 kyu (mid-senior level).',
    website: 'https://gist.github.com/ched-dev/28f48a3044e7ca14ba294c7732033dee'
  }
]

const popularTags = getPopularTags(posts)

const getImages = (post) => {
  if (post.images && post.images.length) return post.images
  if (post.thumbnail) return [{ src: post.thumbnail, alt: post.title }]
  return []
}

export default function Katas() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <Layout title="Code Projects">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <div className="sticky-header">
            <h1 className="section-title">Code Katas</h1>
            <p className="section-subtitle">Practicing JavaScript code with mini challenges</p>
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
