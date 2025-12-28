'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Scene3D from './Scene3D';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.4'
    );
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.scene3DContainer}>
        <Scene3D />
      </div>
      
      <div className={styles.content}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.textContainer}>
            <h1 ref={titleRef} className={styles.title}>
              <span className="block text-xl md:text-2xl font-medium text-royal-300 mb-2">
                Hello, I'm
              </span>
              <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold gradient-text">
                Your Name
              </span>
            </h1>
            
            <p ref={subtitleRef} className={styles.subtitle}>
              Software Engineer crafting innovative digital experiences
              <br />
              <span className="text-royal-300">Full Stack Development • Creative Solutions • Modern Technologies</span>
            </p>
            
            <div ref={ctaRef} className={styles.cta}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Work
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}