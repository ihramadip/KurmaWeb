import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <svg className="hero-arch" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M250 80 C150 80 80 160 80 270 L80 520 L420 520 L420 270 C420 160 350 80 250 80Z" stroke="#6B4C2A" strokeWidth="2" fill="none"/>
        <path d="M250 30 C120 30 40 140 40 270 L40 560 L460 560 L460 270 C460 140 380 30 250 30Z" stroke="#6B4C2A" strokeWidth="1" fill="none" opacity="0.5"/>
        <circle cx="250" cy="60" r="18" stroke="#C49A3C" strokeWidth="1.5" fill="none"/>
        <circle cx="250" cy="60" r="8" fill="#C49A3C" opacity="0.4"/>
        <line x1="250" y1="30" x2="250" y2="42" stroke="#C49A3C" strokeWidth="1.5"/>
        <path d="M180 300 L250 220 L320 300 L250 380Z" stroke="#C49A3C" strokeWidth="1" fill="none" opacity="0.6"/>
        <path d="M160 340 L250 240 L340 340" stroke="#C49A3C" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <path d="M200 520 L200 480 C200 430 220 420 250 420 C280 420 300 430 300 480 L300 520" stroke="#6B4C2A" strokeWidth="1.5" fill="none"/>
      </svg>

      <div className="hero-content">
        <div className="hero-eyebrow">Masjid Al-Ikhuwwah</div>
        <h1 className="hero-title">
          Keluarga <em>Remaja</em> Masjid
        </h1>
        <p className="hero-subtitle">Bersama Tumbuh, Bersama Berjuang</p>
        <p className="hero-desc">KURMA hadir sebagai wadah bagi remaja masjid untuk berkembang dalam ilmu, iman, dan akhlak — membangun generasi yang tangguh dan penuh cahaya.</p>
        <div className="hero-actions">
          <a href="#kontak" className="btn-primary">Bergabung Sekarang</a>
          <a href="#program" className="btn-ghost">Lihat Program</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-num">120+</span>
          <div className="stat-label">Anggota Aktif</div>
        </div>
        <div className="stat-item">
          <span className="stat-num">8</span>
          <div className="stat-label">Divisi</div>
        </div>
        <div className="stat-item">
          <span className="stat-num">5th</span>
          <div className="stat-label">Tahun Berdiri</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
