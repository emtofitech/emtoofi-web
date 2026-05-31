import FadeUp from '@/components/FadeUp';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <div className="contact-hero">
        <FadeUp><div className="section-tag gold-tag">Get in touch</div></FadeUp>
        <h1>Let&apos;s build something<br /><em>worth building.</em></h1>
        <p>Tell us about your project. We&apos;ll get back to you within 24 hours with honest thoughts — not a sales pitch.</p>
      </div>

      <section className="contact-body">
        <div className="contact-layout">
          <FadeUp className="contact-info">
            <h3>Start the conversation</h3>
            <p>We work with startups and enterprises who take what they&apos;re building seriously. If that&apos;s you, we&apos;d love to hear from you.</p>
            <div className="contact-detail">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-detail-label">Headquarters</div>
                <div className="contact-detail-val">Lagos, Nigeria</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">✉️</div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-val"><a href="mailto:hello@emtoofi.com">hello@emtoofi.com</a></div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">📅</div>
              <div>
                <div className="contact-detail-label">Book a discovery call</div>
                <div className="contact-detail-val"><a href="#">calendly.com/emtoofi</a></div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">⏱️</div>
              <div>
                <div className="contact-detail-label">Response time</div>
                <div className="contact-detail-val">Within 24 hours, always</div>
              </div>
            </div>

            <div className="offices">
              <h4>Offices &amp; Remote</h4>
              <div className="office-row">
                <div className="office-item">
                  <div className="office-dot"></div>
                  <div className="office-name">Lagos HQ</div>
                  <div className="office-loc">Lagos Island, Nigeria</div>
                </div>
                <div className="office-item">
                  <div className="office-dot" style={{ background: 'var(--gold)' }}></div>
                  <div className="office-name">Remote</div>
                  <div className="office-loc">Delivering globally</div>
                </div>
              </div>
            </div>
          </FadeUp>

          <ContactForm />
        </div>
      </section>

      <section className="faq-section">
        <FadeUp><div className="section-tag">FAQ</div></FadeUp>
        <FadeUp><h2 className="display">Questions we<br /><em>hear most.</em></h2></FadeUp>
        <div className="faq-grid">
          <FadeUp><div className="faq-item"><div className="faq-q">How long does a typical project take?</div><div className="faq-a">Most web platforms take 6–12 weeks. Mobile apps range from 8–16 weeks depending on complexity. We&apos;ll give you a clear timeline after our discovery call.</div></div></FadeUp>
          <FadeUp delay={1}><div className="faq-item"><div className="faq-q">What&apos;s your minimum project budget?</div><div className="faq-a">We typically work with projects from $5,000 USD and above. Quality work requires real investment — we won&apos;t compromise on that.</div></div></FadeUp>
          <FadeUp delay={2}><div className="faq-item"><div className="faq-q">Do you work with clients outside Nigeria?</div><div className="faq-a">Absolutely. We work with clients globally. Our team is remote-first and experienced with async collaboration across time zones.</div></div></FadeUp>
          <FadeUp delay={3}><div className="faq-item"><div className="faq-q">Will you maintain the product after launch?</div><div className="faq-a">Yes. We offer retainer-based maintenance and growth sprints post-launch. We prefer long-term partnerships over one-off engagements.</div></div></FadeUp>
          <FadeUp><div className="faq-item"><div className="faq-q">What happens after I send this form?</div><div className="faq-a">You&apos;ll hear from us within 24 hours. We&apos;ll schedule a short discovery call, understand your goals, and send a proposal within 5 business days.</div></div></FadeUp>
          <FadeUp delay={1}><div className="faq-item"><div className="faq-q">Do you sign NDAs?</div><div className="faq-a">Yes, we&apos;re happy to sign NDAs before any detailed conversations. Protecting your idea is important and we take it seriously.</div></div></FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
