import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaXTwitter, FaGithub } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src="/logo.Jpeg" alt="EmtooFi Logo" width={40} height={40} style={{ borderRadius: '8px' }} />
            <div>
              <div className="nav-logo-text" style={{ color: 'var(--white)' }}>EmtooFi</div>
              <div className="nav-logo-sub" style={{ color: 'rgba(255,255,255,.35)' }}>Technologies Ltd</div>
            </div>
          </Link>
          <p>Web and mobile products for companies that mean business. Lagos, Nigeria.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a>Web Design &amp; Dev</a>
          <a>Mobile Apps</a>
          <a>UI/UX Design</a>
          <a>API Development</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about">About us</Link>
          <Link href="/projects">Our work</Link>
          <Link href="/team">The team</Link>
          <a>Careers</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href=''>LinkedIn</a>
          <a href='https://x.com/home'>Twitter / X</a>
          <a href='https://www.instagram.com/emtofitechnologies/'>instagram</a>
          <a href='mailto:emtofitechnologies@gmail.com'>emtofitechnologies@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 EmtooFi Technologies Ltd. All rights reserved.</div>
        <div className="footer-socials">
          <a className="social-link"><FaLinkedin /></a>
          <a className="social-link"><FaXTwitter /></a>
          <a className="social-link"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}
