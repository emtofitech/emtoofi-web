import Link from 'next/link';
import { BsLightningChargeFill, BsBullseye } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import HeroCanvas from '@/components/HeroCanvas';
import TypedText from '@/components/TypedText';
import CounterStats from '@/components/CounterStats';
import FadeUp from '@/components/FadeUp';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-grid"></div>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="hero-lines">
          <div className="h-line"></div>
          <div className="h-line"></div>
          <div className="h-line"></div>
          <div className="v-line"></div>
          <div className="v-line"></div>
        </div>
        <HeroCanvas />
        <div className="hero-content">
          <div className="hero-tag">Lagos, Nigeria — Global delivery</div>
          <h1>We build products<br />your users <em><TypedText /></em></h1>
          <p className="hero-sub">
            EmtooFi Technologies partners with startups and enterprises to design, build, and ship web and mobile products — from your first users to your millionth.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-gold">Start a project</Link>
            <Link href="/projects" className="btn-outline-dark">See our work</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <CounterStats />

      {/* WHY */}
      <section className="why">
        <FadeUp className="why-intro">
          <div className="section-tag">Why EmtooFi</div>
          <h2 className="display">Small enough to care.<br /><em>Sharp enough</em> to deliver.</h2>
          <p>We don&apos;t do moonshots or long-winded sprints. We cut through the noise and ship things that work — fast, clean, and built to scale.</p>
        </FadeUp>
        <div className="why-grid">
          <FadeUp delay={1}>
            <div className="why-card">
              <div className="why-icon"><BsLightningChargeFill /></div>
              <h3>Invest smart, not big</h3>
              <p>We calculate exactly what will move the needle. No wasted retainers, no vague scoping. Every sprint has a clear, tangible output you can see and ship.</p>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="why-card">
              <div className="why-icon"><BsBullseye /></div>
              <h3>Built for your scale</h3>
              <p>Whether you&apos;re a 3-person startup or a 300-person enterprise, our process adapts to your pace, your team, and your ambition without the complexity.</p>
            </div>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="why-card">
              <div className="why-icon"><FaHandshake /></div>
              <h3>Partners, not vendors</h3>
              <p>We become an extension of your team. We take ownership of outcomes — not just deliverables — because your growth is the only metric that matters.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <FadeUp><div className="section-tag gold-tag">What we build</div></FadeUp>
        <FadeUp><h2 className="display white">Two crafts.<br /><em>One standard</em> of excellence.</h2></FadeUp>
        <div className="services-layout">
          <FadeUp delay={1}>
            <div className="service-block">
              <div className="service-num">01 / Web platforms</div>
              <h3>Web Design<br />&amp; Development</h3>
              <p>From marketing sites that convert to complex SaaS platforms that scale — we design and engineer web products your users and business can rely on.</p>
              <div className="service-tags">
                <span className="tag">UI/UX design</span>
                <span className="tag">React / Next.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">CMS integration</span>
                <span className="tag">API architecture</span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="service-block">
              <div className="service-num">02 / Mobile</div>
              <h3>Mobile App<br />Development</h3>
              <p>Cross-platform and native mobile experiences built for performance, usability, and retention. Apps your users open daily, not just once.</p>
              <div className="service-tags">
                <span className="tag">Flutter</span>
                <span className="tag">React Native</span>
                <span className="tag">iOS &amp; Android</span>
                <span className="tag">Push notifications</span>
                <span className="tag">Offline-first</span>
                <span className="tag">App Store launch</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <FadeUp><div className="section-tag">How we work</div></FadeUp>
        <FadeUp><h2 className="display">A process built for<br /><em>clarity</em> and speed.</h2></FadeUp>
        <div className="process-steps">
          <FadeUp>
            <div className="process-step">
              <div className="step-circle">1</div>
              <h3>Discover</h3>
              <p>We dig into your goals, users, and constraints so we understand what to build before writing a line of code.</p>
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="process-step">
              <div className="step-circle">2</div>
              <h3>Design</h3>
              <p>Wireframes, prototypes, and visual systems — validated with you before we build. No surprises at handoff.</p>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="process-step">
              <div className="step-circle">3</div>
              <h3>Build</h3>
              <p>Iterative sprint-based development with weekly demos. You see progress constantly, not just at the end.</p>
            </div>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="process-step">
              <div className="step-circle">4</div>
              <h3>Launch</h3>
              <p>Deployment, QA, and handoff — we don&apos;t disappear. We ship and stick around to make sure it works.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <FadeUp><div className="section-tag gold-tag">Client voices</div></FadeUp>
        <FadeUp><h2 className="display white">What our clients<br /><em>actually say.</em></h2></FadeUp>
        <div className="testi-grid">
          <FadeUp>
            <div className="testi-card">
              <div className="testi-stars">★ ★ ★ ★ ★</div>
              <div className="testi-quote">&ldquo;EmtooFi took our messy idea and turned it into a polished product in 6 weeks. They didn&apos;t just build what we asked — they improved it.&rdquo;</div>
              <div className="testi-author">
                <div className="testi-avatar">A</div>
                <div>
                  <div className="testi-name">Amara Okonkwo</div>
                  <div className="testi-title">CEO, Vantage Health — Lagos</div>
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="testi-card">
              <div className="testi-stars">★ ★ ★ ★ ★</div>
              <div className="testi-quote">&ldquo;We&apos;ve worked with agencies before. EmtooFi is different. They communicate clearly, hit deadlines, and the code they ship is actually clean.&rdquo;</div>
              <div className="testi-author">
                <div className="testi-avatar">R</div>
                <div>
                  <div className="testi-name">Richard Eze</div>
                  <div className="testi-title">CTO, LogiTrack Enterprise</div>
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="testi-card">
              <div className="testi-stars">★ ★ ★ ★ ★</div>
              <div className="testi-quote">&ldquo;The app they built hit 4.8 stars on launch day. Zero critical bugs in 3 months. I&apos;d work with them again without a second thought.&rdquo;</div>
              <div className="testi-author">
                <div className="testi-avatar">N</div>
                <div>
                  <div className="testi-name">Ngozi Adeyemi</div>
                  <div className="testi-title">Founder, HealthConnect Africa</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <div className="home-cta">
        <h2>Ready to build something<br /><em>people love?</em></h2>
        <div className="home-cta-actions">
          <Link href="/contact" className="btn-gold">Start a project</Link>
          <Link href="/about" className="btn-outline-dark">Learn about us</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
