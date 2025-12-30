'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Scene3D from './Scene3D';
import ProfilePicture3D from './ProfilePicture3D';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power4.out',
      });

      // Animate buttons
      gsap.from(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      {/* 3D Background */}
      <div className={styles.background}>
        <Scene3D />
      </div>

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Side - Text Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>Available for freelance</span>
            </div>

            <h1 ref={titleRef} className={styles.title}>
              Hi, I'm{' '}
              <span className={styles.gradientText}>Your Name</span>
              <br />
              Full Stack Developer
            </h1>

            <p ref={subtitleRef} className={styles.subtitle}>
              I craft beautiful, functional, and scalable web applications
              using modern technologies. Passionate about creating exceptional
              user experiences and solving complex problems.
            </p>

            <div ref={buttonsRef} className={styles.buttons}>
              <button
                onClick={() => scrollToSection('projects')}
                className={styles.primaryButton}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={styles.secondaryButton}
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className={styles.profileSection}>
            <ProfilePicture3D 
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
              name="Your Name"
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}