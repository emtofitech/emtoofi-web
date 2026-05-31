'use client';

import { useEffect, useState } from 'react';

const phrases = ['actually love.', 'come back to.', 'tell friends about.', "can't live without."];

export default function TypedText() {
  const [text, setText] = useState('');

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false;
    let timeout: NodeJS.Timeout;

    function typeLoop() {
      const phrase = phrases[pi];
      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        ci++;
        if (ci === phrase.length) {
          deleting = true;
          timeout = setTimeout(typeLoop, 2000);
          return;
        }
      } else {
        setText(phrase.slice(0, ci - 1));
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      timeout = setTimeout(typeLoop, deleting ? 60 : 90);
    }

    timeout = setTimeout(typeLoop, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <span id="typedText">{text}</span>
      <span className="typed-cursor"></span>
    </>
  );
}
