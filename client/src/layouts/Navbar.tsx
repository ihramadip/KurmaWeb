import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-logo">
        <img src={logo} alt="KURMA Logo" className="logo-img" />
      </div>

      <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#tentang" onClick={() => setIsMenuOpen(false)}>Tentang</a></li>
        <li><a href="#program" onClick={() => setIsMenuOpen(false)}>Program</a></li>
        <li><a href="#jadwal" onClick={() => setIsMenuOpen(false)}>Jadwal</a></li>
        <li><a href="#pengurus" onClick={() => setIsMenuOpen(false)}>Pengurus</a></li>
        <li><a href="#kontak" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Bergabung</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
