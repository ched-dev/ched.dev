import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const mainNavLinks = [
  // {
  //   name: 'Code in Bits',
  //   uri: '/code/bits'
  // },
  {
    name: 'Code Projects',
    uri: '/code/projects'
  },
  {
    name: 'Code Katas',
    uri: '/code/katas'
  },
  // {
  //   name: 'Book Assessments',
  //   uri: '/books'
  // },
  {
    name: 'Study Sessions',
    uri: '/code/study-sessions'
  },
  // {
  //   name: 'Code Challenges',
  //   uri: '/code/challenges'
  // },
  // {
  //   name: 'Code Live Streams',
  //   uri: '/code/live-streams'
  // },
  {
    name: 'Mentoring',
    uri: '/mentoring'
  }
]

export default function MainNav() {
  const [showMobileNav, setShowMobileNav] = useState(null)
  const router = useRouter()

  const toggleMobileNav = (e) => {
    setShowMobileNav(!showMobileNav)
  }

  const isActiveClass = (pathname) => {
    if (router.pathname.toLowerCase() === pathname) {
      return 'is-active'
    }

    return ''
  }

  return (
    <header className="main-header">
      <div className="main-header-links">
        <Link href="/" title="home"><a className="main-name">ched.dev</a></Link>
        <button className="main-mobile-nav-trigger" onClick={toggleMobileNav}>
          <i className={`fa fa-${showMobileNav ? 'times' : 'bars'}`} />
        </button>
        <nav className={`main-nav ${showMobileNav ? 'main-mobile-nav-expanded' : ''}`}>
          {mainNavLinks.map(link => (
            <Link key={link.uri} href={link.uri}>
              <a className={isActiveClass(link.uri)}><span>{link.name}</span></a>
            </Link>
          ))}
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
            <i className="fab fa-github" />
            <span className="sr-only">Github Repositories</span>
          </a>
          <a
            href="https://twitter.com/ched_dev"
            target="_blank"
            rel="noopener noreferer"
            title="Twitter: @ched_dev"
          >
            <i className="fab fa-twitter" />
            <span className="sr-only">Twitter Feed</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UC4Z7bn3Iyj_FHNUT-RxDD-Q"
            target="_blank"
            rel="noopener noreferer"
            title="YouTube Channel"
          >
            <i className="fab fa-youtube" />
            <span className="sr-only">YouTube Channel</span>
          </a>
          <a
            href="https://twitch.com/ched_dev"
            target="_blank"
            rel="noopener noreferer"
            title="Twitch: @ched_dev"
          >
            <i className="fab fa-twitch" />
            <span className="sr-only">Twitch Stream</span>
          </a>
          <a
            href="https://discord.gg/Z8CqGuJjrb"
            target="_blank"
            rel="noopener noreferer"
            title="Discord Community"
          >
            <i className="fab fa-discord" />
            <span className="sr-only">Discord Community</span>
          </a>
        </nav>
      </section>
    </header>
  )
}