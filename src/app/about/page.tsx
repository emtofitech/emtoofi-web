import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="section-tag gold-tag">Our story</div>
          <h1>We started with a<br />simple belief: <em>great<br />software changes lives.</em></h1>
          <p>EmtooFi was born in Lagos with a conviction that African startups deserve world-class technical partners — not second-rate outsourcing.</p>
        </div>
      </div>

      {/* STORY */}
      <section className="about-story">
        <div className="about-story-layout">
          <FadeUp className="about-story-text">
            <div className="section-tag">Who we are</div>
            <h2>Built by builders,<br />for <em>people who build.</em></h2>
            <p>EmtooFi Technologies was founded by engineers who were frustrated watching great product ideas fail because of poor technical execution. We set out to be the team we always wished our clients had access to.</p>
            <p>Today, we partner with ambitious founders and enterprise teams across Africa and beyond — helping them ship products that are well-designed, well-built, and actually used.</p>
            <p>We&apos;re based in Lagos but work globally. Remote-first, senior-led, and obsessed with quality.</p>
            <Link href="/team" className="btn-green" style={{ marginTop: '12px' }}>Meet the team →</Link>
          </FadeUp>
          <FadeUp delay={1} className="about-visual">
            <div className="about-vis-grid">
              <div className="about-vis-card"><div className="about-vis-num">40+</div><div className="about-vis-label">Projects shipped</div></div>
              <div className="about-vis-card"><div className="about-vis-num">12</div><div className="about-vis-label">Industries</div></div>
              <div className="about-vis-card"><div className="about-vis-num">98%</div><div className="about-vis-label">On-time delivery</div></div>
              <div className="about-vis-card"><div className="about-vis-num">6+</div><div className="about-vis-label">Years combined exp.</div></div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <FadeUp><div className="section-tag">What we stand for</div></FadeUp>
        <FadeUp><h2 className="display">Values that guide<br /><em>every decision.</em></h2></FadeUp>
        <div className="values-grid">
          <FadeUp><div className="value-card"><div className="value-num">01</div><h3>Honesty above comfort</h3><p>We tell clients what they need to hear, not what they want to hear. If an idea won&apos;t work, we say so — and we come with alternatives.</p></div></FadeUp>
          <FadeUp delay={1}><div className="value-card"><div className="value-num">02</div><h3>Excellence in craft</h3><p>We care deeply about the quality of what we build — the code, the design, the UX, the performance. Average work has never been acceptable here.</p></div></FadeUp>
          <FadeUp delay={2}><div className="value-card"><div className="value-num">03</div><h3>Outcomes over outputs</h3><p>We don&apos;t measure success in tickets closed or features shipped. We measure it in whether what we built actually moved the needle for you.</p></div></FadeUp>
          <FadeUp><div className="value-card"><div className="value-num">04</div><h3>Speed without shortcuts</h3><p>We move fast — but we don&apos;t cut corners. Pace and quality aren&apos;t opposites when you have the right process and the right people.</p></div></FadeUp>
          <FadeUp delay={1}><div className="value-card"><div className="value-num">05</div><h3>Deep partnership</h3><p>The best work happens when we&apos;re truly invested in your mission. We choose clients as carefully as clients choose us.</p></div></FadeUp>
          <FadeUp delay={2}><div className="value-card"><div className="value-num">06</div><h3>Africa-first thinking</h3><p>We build for the real constraints of African markets — connectivity, device diversity, local payment systems — not just copy-paste Silicon Valley.</p></div></FadeUp>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline">
        <FadeUp><div className="section-tag gold-tag">Our journey</div></FadeUp>
        <FadeUp><h2 className="display white">How we got<br /><em>here.</em></h2></FadeUp>
        <div className="timeline">
          <FadeUp>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2019</div>
              <h3>The beginning</h3>
              <p>Founded by Martins and Adaeze, initially as a freelance outfit taking on web projects for Lagos SMEs. Early days, late nights, a lot of learning.</p>
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2021</div>
              <h3>First enterprise clients</h3>
              <p>Landed our first enterprise SaaS contract — a fleet management platform that put us on the map. Grew the team to 5 full-time engineers.</p>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2022</div>
              <h3>Mobile-first expansion</h3>
              <p>Added a dedicated Flutter team and shipped our first healthcare app. Reached 10 completed projects with zero missed deadlines.</p>
            </div>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2023</div>
              <h3>Incorporated &amp; scaled</h3>
              <p>Formally incorporated as EmtooFi Technologies Ltd. Expanded to serve clients in the UK and North America while staying Lagos-rooted.</p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: 'var(--gold-light)' }}></div>
              <div className="timeline-year">2025 — Now</div>
              <h3>Building the next chapter</h3>
              <p>40+ projects delivered. Expanding into AI-integrated products and open-source tooling for the African developer ecosystem.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to be part of<br /><em>what we build next?</em></h2>
        <div className="home-cta-actions">
          <Link href="/contact" className="btn-gold">Start a project</Link>
          <Link href="/team" className="btn-outline-dark">Meet the team</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
