import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'
import Footer from 'src/components/Footer'
import Tags from 'src/components/Tags'

export default function Home() {
  return (
    <Layout title="Live coding web apps &
    products">
      <MainNav />
      <main className="content-container homepage-container flexed-center">
        {/* <i className="homepage-icon fa fa-code" /> */}
        <h1 className="main-home-title"><span>Live coding web apps with <br/>front end technologies</span></h1>
        <p className="main-home-tags">
          <Tags tags={["javascript", "typescript", "react", "svelte", "tailwind css", "redwoodjs", "directus.io", "apis"]} />
        </p>
        <nav className="main-extended-social-links">
          <a
            href="https://twitch.com/ched_dev"
            target="_blank"
            rel="noopener noreferer"
            title="Twitch: @ched_dev"
          >
            <i className="fab fa-twitch" />
            <p>
              <span>Twitch Live Stream</span>
              Live coding streams on our current projects
            </p>
          </a>
          <a
            href="https://www.youtube.com/@ched_dev"
            target="_blank"
            rel="noopener noreferer"
            title="YouTube Channel"
          >
            <i className="fab fa-youtube" />
            <p>
              <span>YouTube Channel</span>
              Archives of Live Streams and projects
            </p>
          </a>
          <a
            href="https://twitter.com/ched_dev"
            target="_blank"
            rel="noopener noreferer"
            title="Twitter: @ched_dev"
          >
            <i className="fab fa-twitter" />
            <p>
              <span>Twitter Feed</span>
              Tweets about code, streaming, and the like
            </p>
          </a>
          {/* <a
            href="https://discord.gg/Z8CqGuJjrb"
            target="_blank"
            rel="noopener noreferer"
            title="Discord Community"
          >
            <i className="fab fa-discord" />
            <p>
              <span>Discord Community</span>
              Connecting with the community and live stream alerts
            </p>
          </a> */}
          <a
            href="https://github.com/ched-dev"
            target="_blank"
            rel="noopener noreferer"
            title="Github: @ched-dev"
          >
            <i className="fab fa-github" />
            <p>
              <span>Github Repositories</span>
              Open Source code and projects worked on Stream
            </p>
          </a>
        </nav>
        <Footer />
      </main>
    </Layout>
  )
}
