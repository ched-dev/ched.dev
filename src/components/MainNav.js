import Link from 'next/link'

export default function MainNav() {
  return (
    <header className="main-header">
      <div className="main-header-links">
        <Link href="/" title="home"><a className="main-name">ched.dev</a></Link>
        <nav className="main-nav">
          {/* <Link href="/code/bits"><a>Code in Bits</a></Link> */}
          <Link href="/code/projects"><a>Code Projects</a></Link>
          {/* <Link href="/code/challenges"><a>Code Challenges</a></Link> */}
          {/* <Link href="/code/live-streams"><a>Code Live Streams</a></Link> */}
          
          {/* <Link href="/code/interview-prep"><a>Interview Prep</a></Link> */}
        </nav>
      </div>
      <section className="main-footer">
        <span className="main-logo" aria-hidden="true">
          <img src="/avatar-cheddev-spaced.png" />
        </span>
        <nav className="main-social-links">
          <a
            href="https://github.com/ched-dev"
            target="_blank"
            rel="noopener noreferer"
            title="Github: @ched-dev"
          >
            <i className="fa fa-github" />
            <span className="sr-only">Github Repositories</span>
          </a>
          <a
            href="https://twitter.com/ched_dev"
            target="_blank"
            rel="noopener noreferer"
            title="Twitter: @ched_dev"
          >
            <i className="fa fa-twitter" />
            <span className="sr-only">Twitter Feed</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UC4Z7bn3Iyj_FHNUT-RxDD-Q"
            target="_blank"
            rel="noopener noreferer"
            title="YouTube Channel"
          >
            <i className="fa fa-youtube-play" />
            <span className="sr-only">YouTube Channel</span>
          </a>
          <a
            href="https://twitch.com/ched_dev"
            target="_blank"
            rel="noopener noreferer"
            title="Twitch: @ched_dev"
          >
            <i className="fa fa-twitch" />
            <span className="sr-only">Twitch Stream</span>
          </a>
        </nav>
      </section>
    </header>
  )
}