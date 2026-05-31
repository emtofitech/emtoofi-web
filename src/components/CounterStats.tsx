'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  count: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { count: 40, suffix: '+', label: 'Projects delivered' },
  { count: 98, suffix: '%', label: 'On-time delivery' },
  { count: 12, suffix: '+', label: 'Industries served' },
  { count: 6, suffix: '+', label: 'Years combined expertise' },
];

export default function CounterStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<number[]>(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateAll();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animateAll() {
    stats.forEach((stat, index) => {
      let current = 0;
      const step = stat.count / 60;
      const interval = setInterval(() => {
        current = Math.min(current + step, stat.count);
        setValues(prev => {
          const next = [...prev];
          next[index] = Math.floor(current);
          return next;
        });
        if (current >= stat.count) clearInterval(interval);
      }, 16);
    });
  }

  return (
    <div className="stats" ref={containerRef}>
      {stats.map((stat, i) => (
        <div className="stat" key={i}>
          <div className="stat-num">{values[i]}{stat.suffix}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
