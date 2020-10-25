import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home">
      <MainNav />
      <main className="content-container">
        <h1>#javascript, #es6, #css, #sass</h1>
      </main>
    </Layout>
  )
}
