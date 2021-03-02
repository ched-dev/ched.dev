import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'
import Link from 'next/link'
import Tags from 'src/components/Tags'

export default function Home() {
  return (
    <Layout title="Home">
      <MainNav />
      <main className="content-container">
        <i className="homepage-icon fa fa-code" />
        {/* <h1>Front End Web Development Knowledgebase</h1>
        <h2><Tags size="l" tags={['javascript', 'es6', 'css', 'sass']} /></h2> */}
      </main>
    </Layout>
  )
}
