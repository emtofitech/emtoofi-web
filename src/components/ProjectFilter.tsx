'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';
import { FaCreditCard, FaHospital, FaTruck, FaShoppingBag, FaChartBar, FaMobileAlt, FaCoins } from 'react-icons/fa';

interface Project {
  id: number;
  categories: string;
  bg: string;
  icon: React.ReactNode;
  category: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    categories: 'fintech web',
    bg: 'proj-bg-1',
    icon: <FaCreditCard />,
    category: 'Fintech · Web platform',
    year: '2024',
    title: 'Enterprise payment dashboard for a Lagos-based fintech',
    description: 'Real-time transaction monitoring and analytics platform handling 10k+ daily transactions for enterprise clients across 4 African markets. Reduced reconciliation time by 3× through custom data pipeline and smart alerting.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Recharts'],
    featured: true,
  },
  {
    id: 2,
    categories: 'mobile',
    bg: 'proj-bg-2',
    icon: <FaHospital />,
    category: 'Healthtech · Mobile',
    year: '2024',
    title: 'Patient-facing mobile app for a healthcare startup',
    description: 'Flutter app for appointment booking, telemedicine, and prescription tracking. Zero to App Store in 8 weeks. Launched at 4.8★.',
    tech: ['Flutter', 'Firebase', 'Node.js', 'Agora'],
  },
  {
    id: 3,
    categories: 'web saas',
    bg: 'proj-bg-3',
    icon: <FaTruck />,
    category: 'Logistics · SaaS',
    year: '2024',
    title: 'Fleet tracking SaaS for a transport enterprise',
    description: 'Real-time GPS tracking, driver analytics, and mobile companion app. Deployed across 3 depots, cutting operational cost by 28%.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Flutter'],
  },
  {
    id: 4,
    categories: 'web mobile',
    bg: 'proj-bg-4',
    icon: <FaShoppingBag />,
    category: 'E-commerce · Web + Mobile',
    year: '2023',
    title: 'B2B e-commerce platform for a retail brand',
    description: 'Full-stack shop with custom CMS, inventory management, and companion mobile app. Cart abandonment dropped by 40% after UX redesign.',
    tech: ['Next.js', 'Stripe', 'Sanity', 'React Native'],
    link: 'https://fromafricab2b.com/',
  },
  {
    id: 5,
    categories: 'saas fintech',
    bg: 'proj-bg-5',
    icon: <FaChartBar />,
    category: 'Fintech · SaaS',
    year: '2023',
    title: 'SME lending platform with AI-assisted credit scoring',
    description: 'Automated loan origination and credit scoring for SMEs. Processing 200+ applications weekly with 80% faster approval time than the manual process.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
  },
  {
    id: 6,
    categories: 'mobile',
    bg: 'proj-bg-6',
    icon: <FaMobileAlt />,
    category: 'Productivity · Mobile',
    year: '2023',
    title: 'Team accountability & screen-time app for remote teams',
    description: 'Android app with background app tracking, accountability pairing, streaks, and breach alerts. Built with Flutter, Spring Boot, and MongoDB Atlas.',
    tech: ['Flutter', 'Spring Boot', 'MongoDB', 'Firebase FCM'],
  },
  {
    id: 7,
    categories: 'web3',
    bg: 'proj-bg-1',
    icon: <FaCoins />,
    category: 'Web3',
    year: '2024',
    title: 'Skillpays',
    description: 'A decentralized application platform for Skillpays, part of the projects done by us.',
    tech: ['Web3', 'React', 'Next.js'],
    link: 'https://skills-pays-cehmtximg-martinsos-projects-ea3a0d1b.vercel.app',
  },
  {
    id: 8,
    categories: 'web',
    bg: 'proj-bg-3',
    icon: <FaTruck />,
    category: 'E-commerce · Logistics',
    year: '2024',
    title: 'Solvera e-commerce & logistics platform',
    description: 'An e-commerce platform with integrated logistics capabilities, streamlining the entire ordering and delivery process.',
    tech: ['React', 'Next.js', 'Web'],
    link: 'https://solvera-rosy.vercel.app/',
  },
];

const filters = [
  { label: 'All projects', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'SaaS', value: 'saas' },
  { label: 'Fintech', value: 'fintech' },
  { label: 'Web3', value: 'web3' },
];

export default function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.categories.includes(activeFilter)
  );

  return (
    <>
      <div className="filter-bar">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
        <span className="filter-count">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {filtered.map((proj, i) => (
            <FadeUp key={proj.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <div className={`proj-card${proj.featured ? ' featured' : ''}`} data-cat={proj.categories}>
                <div className={`proj-card-img ${proj.bg}`}>
                  <div className="proj-mockup-icon">{proj.icon}</div>
                  <div className="proj-card-img-overlay">
                    {proj.link ? (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-view-btn" style={{ textDecoration: 'none' }}>View project</a>
                    ) : (
                      <span className="proj-view-btn">View project</span>
                    )}
                  </div>
                </div>
                <div className="proj-card-body">
                  <div className="proj-meta">
                    <div className="proj-cat">{proj.category}</div>
                    <div className="proj-year">{proj.year}</div>
                  </div>
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="proj-tech">
                    {proj.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
