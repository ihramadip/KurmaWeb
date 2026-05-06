import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-logo">
        <img src={logo} alt="KURMA Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#jadwal">Jadwal</a></li>
        <li><a href="#pengurus">Pengurus</a></li>
        <li><a href="#kontak" className="nav-cta">Bergabung</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
