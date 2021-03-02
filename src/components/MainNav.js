import Link from 'next/link'

export default function MainNav() {
  return (
    <header className="main-header">
      <div className="main-header-links">
        <Link href="/" title="home"><a className="main-name">ched.dev</a></Link>
        <nav className="main-nav">
          <Link href="/code/bits"><a>Code in Bits</a></Link>
          <Link href="/code/challenges"><a>Code Challenges</a></Link>
          <Link href="/code/live-streams"><a>Code Live Streams</a></Link>
          
          {/* <Link href="/code/interview-prep"><a>Interview Prep</a></Link> */}
        </nav>
      </div>
      <span className="main-logo" aria-hidden="true">
        <img src="/avatar-cheddev-spaced.png" />
      </span>
    </header>
  )
}