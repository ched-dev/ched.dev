import Layout from 'src/components/Layout'
import MainNav from 'src/components/MainNav'
import Footer from 'src/components/Footer'

const mentoringEmail = "cheddevdev@gmail.com"

export default function Home() {
  return (
    <Layout title="Code & Career Mentoring">
      <MainNav />
      <main className="content-container">
        <section className="section-header">
          <div className="sticky-header">
            <h1 className="section-title section-title--sm">Code & Career Mentoring</h1>
            <p className="section-subtitle">Help with code, career, or pesky coworkers</p>
          </div>
        </section>
        <section className="articles-fullpage">
          <h2>Need help with code or debugging?</h2>
          <p>JavaScript, React, TypeScript, Architecture, or other Software Engineering topics are my area of expertise. Let me know what kind of issue you're having and we can hop on a call if I can help. I won't code for you since my goal is to train you to handle problems yourself. We can pair program or talk the problem out.</p>
          <h2>Need help with software engineering career or interview preparation?</h2>
          <p>If you want to switch companies or find your first job, I can help you refresh your resume and prepare for interviews with practice drills you may experience during interviews. I've worked with hundreds of bootcamp students finding their first jobs, as well as mid-to-senior level developers needing to quickly prepare for upcoming interviews. If you're looking for a promotion, I can help you discover the next-level skills your boss is looking for.</p>
          <h2>How much does it cost?</h2>
          <p>I charge hourly with a one hour minimum. Cost is based on your location and complexity of the problem. When you reach out to me I will give you a proper estimate before we start.</p>
          <h2>How do we get started?</h2>
          <div>
            <a
              className="button-callout"
              href={`mailto:${mentoringEmail}?subject=Mentoring Request&body=Include your location/time zone and what you need help with:`}
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fa fa-inbox" /> <span className="button-callout-text">Inquire about Mentoring</span>
            </a>
            <p className="text-muted">Include your location/time zone and what you need help with to get a fast estimate.</p>
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  )
}
