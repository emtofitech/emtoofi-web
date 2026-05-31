'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    let animId: number;
    function animateCursor() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(animateCursor);
    }
    animId = requestAnimationFrame(animateCursor);

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .proj-card, .team-card, .filter-btn');
    const handleEnter = () => {
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.borderColor = 'var(--green)';
    };
    const handleLeave = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'var(--gold)';
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div className="cursor" id="cursor">
      <div className="cursor-ring" ref={ringRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
    </div>
  );
}
