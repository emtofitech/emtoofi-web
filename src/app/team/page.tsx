import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <>
      <div className="team-hero">
        <div className="team-hero-content">
          <div className="section-tag" style={{ color: 'var(--gold-light)' }}>The people</div>
          <h1>Builders, designers,<br /><em>and straight-up</em> doers.</h1>
          <p>We&apos;re a tight-knit team of senior practitioners. You work directly with us — no handoffs to juniors, no account managers in the way.</p>
        </div>
      </div>

      <section className="team-section">
        <div className="squad-label">Founders &amp; Leadership</div>
        <div className="team-grid founders">
          <FadeUp>
            <div className="team-card">
              <div className="team-avatar av-green">M</div>
              <div className="team-info">
                <div className="team-name">Martins O.</div>
                <div className="team-role">Founder &amp; Tech Lead</div>
                <div className="team-bio">Full-stack and blockchain engineer with 3+ years building Web3 and enterprise products across EVM, Solana, and mobile platforms.</div>
                <div className="team-links"><a className="team-link">in</a><a className="team-link">𝕏</a><a className="team-link">gh</a></div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="team-card">
              <div className="team-avatar av-gold">A</div>
              <div className="team-info">
                <div className="team-name">Adaeze K.</div>
                <div className="team-role">Co-founder &amp; Design Lead</div>
                <div className="team-bio">Product designer and UX strategist who has shipped interfaces used by hundreds of thousands of people across Africa and Europe.</div>
                <div className="team-links"><a className="team-link">in</a><a className="team-link">𝕏</a></div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="team-card">
              <div className="team-avatar av-deep">C</div>
              <div className="team-info">
                <div className="team-name">Chidi B.</div>
                <div className="team-role">Co-founder, Strategy &amp; Partnerships</div>
                <div className="team-bio">Bridges the gap between client vision and technical execution. Former startup advisor with a track record in product growth across West Africa.</div>
                <div className="team-links"><a className="team-link">in</a><a className="team-link">𝕏</a></div>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="squad-label" style={{ marginTop: '16px' }}>Engineering Squad</div>
        <div className="team-grid">
          <FadeUp>
            <div className="team-card">
              <div className="team-avatar av-deep">T</div>
              <div className="team-info">
                <div className="team-name">Tobi A.</div>
                <div className="team-role">Senior Frontend Engineer</div>
                <div className="team-bio">React and Next.js specialist. Obsessed with performance, accessibility, and pixel-perfect UI.</div>
                <div className="team-links"><a className="team-link">gh</a><a className="team-link">in</a></div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="team-card">
              <div className="team-avatar av-char">E</div>
              <div className="team-info">
                <div className="team-name">Emeka O.</div>
                <div className="team-role">Backend &amp; API Engineer</div>
                <div className="team-bio">Node.js and Python backend engineer. Builds scalable APIs and data pipelines that don&apos;t fall over at 3am.</div>
                <div className="team-links"><a className="team-link">gh</a><a className="team-link">in</a></div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="team-card">
              <div className="team-avatar av-teal">F</div>
              <div className="team-info">
                <div className="team-name">Fatima I.</div>
                <div className="team-role">Mobile Engineer (Flutter)</div>
                <div className="team-bio">Flutter developer with a sharp eye for mobile UX. Has shipped apps with 50k+ downloads on the Play Store.</div>
                <div className="team-links"><a className="team-link">gh</a><a className="team-link">in</a></div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="team-card">
              <div className="team-avatar av-gold">D</div>
              <div className="team-info">
                <div className="team-name">David N.</div>
                <div className="team-role">DevOps &amp; Infrastructure</div>
                <div className="team-bio">Keeps the lights on. AWS, Docker, CI/CD, and monitoring so projects launch smoothly and stay up.</div>
                <div className="team-links"><a className="team-link">gh</a><a className="team-link">in</a></div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="team-culture">
        <FadeUp><div className="section-tag gold-tag">How we operate</div></FadeUp>
        <FadeUp><h2 className="display white">Culture that<br /><em>drives results.</em></h2></FadeUp>
        <div className="culture-grid">
          <FadeUp>
            <div className="culture-card"><div className="culture-icon">🏗️</div><h3>Ownership over tasks</h3><p>We don&apos;t clock in and wait for instructions. Every team member takes genuine ownership of what they build and the outcomes it creates.</p></div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="culture-card"><div className="culture-icon">📡</div><h3>Radical transparency</h3><p>No hiding behind status updates. We communicate blockers early, share progress constantly, and tell clients the truth — always.</p></div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="culture-card"><div className="culture-icon">🚀</div><h3>Bias for shipping</h3><p>Perfect is the enemy of shipped. We move fast, get things in front of real users, and iterate from there. Done beats polished in a drawer.</p></div>
          </FadeUp>
        </div>
      </section>

      <div className="home-cta">
        <h2>Want to work with<br /><em>this team?</em></h2>
        <div className="home-cta-actions">
          <Link href="/contact" className="btn-gold">Start a project</Link>
          <Link href="/about" className="btn-outline-dark">Our story</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
