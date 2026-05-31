import Link from 'next/link';
import ProjectFilter from '@/components/ProjectFilter';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <div className="projects-hero">
        <div className="projects-hero-tag">Our work</div>
        <h1>Products we&apos;re<br /><em>proud to ship.</em></h1>
        <p>From fintech dashboards to healthcare apps — a selection of the work we&apos;ve done for clients across Africa and beyond.</p>
      </div>

      <ProjectFilter />

      <div className="home-cta">
        <h2>Have a project in mind?<br /><em>Let&apos;s talk.</em></h2>
        <div className="home-cta-actions">
          <Link href="/contact" className="btn-gold">Start a project</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
