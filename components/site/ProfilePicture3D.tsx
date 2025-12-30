'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/ProfilePicture3D.module.css';

interface ProfilePicture3DProps {
  imageUrl: string;
  name?: string;
}

export default function ProfilePicture3D({ 
  imageUrl, 
  name = 'Your Name' 
}: ProfilePicture3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={styles.container}
      style={{
        transform: `
          perspective(1000px)
          rotateY(${mousePosition.x * 15}deg)
          rotateX(${-mousePosition.y * 15}deg)
        `,
      }}
    >
      {/* Outer Glow Ring */}
      <div className={styles.outerRing} />
      
      {/* Middle Ring */}
      <div className={styles.middleRing} />

      {/* Main Picture Container */}
      <div className={styles.pictureContainer}>
        {/* Gradient Border */}
        <div className={styles.gradientBorder} />
        
        {/* Glass Effect Background */}
        <div className={styles.glassBackground} />

        {/* Profile Image */}
        <div className={styles.imageWrapper}>
          <img 
            src={imageUrl} 
            alt={name}
            className={styles.profileImage}
          />
        </div>

        {/* Shine Effect */}
        <div 
          className={styles.shine}
          style={{
            transform: `translate(${mousePosition.x * 50}%, ${mousePosition.y * 50}%)`,
          }}
        />

        {/* Floating Particles */}
        <div className={styles.particle} style={{ top: '10%', left: '15%' }} />
        <div className={styles.particle} style={{ top: '70%', right: '20%' }} />
        <div className={styles.particle} style={{ bottom: '20%', left: '25%' }} />
        <div className={styles.particle} style={{ top: '30%', right: '15%' }} />
      </div>

      {/* Status Badge */}
      <div className={styles.statusBadge}>
        <div className={styles.statusDot} />
        <span>Available for work</span>
      </div>
    </div>
  );
}