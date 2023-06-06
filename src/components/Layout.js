import Head from 'next/head'

export default function Layout({ title, children = [] }) {
  return (
    <div className="main-layout">
      <Head>
        <title>{title} / ched.dev</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#daa520" />
        <meta name="msapplication-TileColor" content="#daa520" />
        <meta name="theme-color" content="#222222" />
      </Head>
      {children}
    </div>
  )
}