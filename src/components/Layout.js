import Head from 'next/head'

export default function Layout({ title, children = [] }) {
  return (
    <div className="main-layout">
      <Head>
        <title>{title} / ched.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}