import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';
import Events from '../components/sections/Events';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const scanAndObserve = () => {
      document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
    };

    // Initial scan
    scanAndObserve();

    // Re-scan when content changes (useful for CMS data)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Events />
      <Team />
      <Contact />
    </main>
  );
};

export default Home;
