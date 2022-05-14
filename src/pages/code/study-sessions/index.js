import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'
import Footer from 'src/components/Footer'
import Tags from 'src/components/Tags'
import { getPopularTags } from 'src/utils/posts'

const affiliateCode = 'cheddev-20'

const posts = [
  {
    slug: 'effective-typescript',
    title: 'Effective TypeScript',
    tags: ['typescript', 'best practices', 'patterns'],
    image: `//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1492053740&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=${affiliateCode}&language=en_US`,
    description: 'In this book we are looking to fill in the gaps beyond basic type checking. We\'ll see how we can build out codebase to be typesafe for all team members to enjoy.',
    url: `https://smile.amazon.com/Effective-TypeScript-Specific-Ways-Improve/dp/1492053740/ref=sr_1_1?tag=${affiliateCode}`,
    playlistUrl: `https://www.youtube.com/playlist?list=PLDPa5Jo5XXRwpofeCCv_4E25t7T2-e2e7`,
    disclosure: 'As an Amazon Associate I earn from qualifying purchases.'
  },
]

const popularTags = getPopularTags(posts)

export default function Home() {
  return (
    <Layout title="Code Study Sessions">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <div className="sticky-header">
            <h1 className="section-title">Code Study Sessions</h1>
            <p className="section-subtitle">Exploring new technologies: frameworks, libraries, and architecture</p>
          </div>
          <p className="section-tags">Topics:<br/><Tags size="s" tags={popularTags.map(post => post.tag)} urlBase="/books" /></p>
        </section>
        <section className="book-grid content-padded">
          {posts.map(post => (
            <article key={post.slug} className="book-card">
              <header className="book-card-header">
                <h2 className="book-card-title">{post.title}</h2>
                <Tags tags={post.tags} />
                {post.image && <img src={post.image} className="book-card-image" />}
              </header>
              
              <section className="book-card-body">
                <p className="book-card-description">{post.description}</p>
                {post.headers && (
                  <ul className="book-card-deep-links">
                    {post.headers.map(header => (
                      <li key={header}>
                        {header}
                      </li>
                    ))}
                  </ul>
                )}
                {post.playlistUrl && (
                  <a
                    className="book-card-read-more"
                    href={post.playlistUrl}
                    target="_blank" rel="noopener no referrer"
                  >
                    <i className="fab fa-youtube" /> <span className="book-card-read-more-text">Watch on YouTube</span>
                  </a>
                )}
                {post.url && (
                  <a
                    className="book-card-read-more"
                    href={post.url}
                    target="_blank" rel="noopener no referrer"
                  >
                    <i className="fa fa-paperclip" /> <span className="book-card-read-more-text">Link to Amazon Book</span>
                  </a>
                )}
                {post.disclosure && (
                  <small className="book-card-disclosure">{post.disclosure}</small>
                )}
              </section>
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
