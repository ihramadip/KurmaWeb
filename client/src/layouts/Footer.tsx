import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-text">KURMA</div>
          <p>Keluarga Remaja Masjid Al-Ikhuwwah. Bersama tumbuh dalam iman, ilmu, dan akhlak mulia.</p>
        </div>
        <div className="footer-col">
          <h5>Tentang</h5>
          <ul>
            <li><a href="#">Sejarah</a></li>
            <li><a href="#">Visi & Misi</a></li>
            <li><a href="#">Struktur Org.</a></li>
            <li><a href="#">Galeri</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Program</h5>
          <ul>
            <li><a href="#">Kajian Rutin</a></li>
            <li><a href="#">Tahsin</a></li>
            <li><a href="#">Sosial Dakwah</a></li>
            <li><a href="#">Leadership</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Kontak</h5>
          <ul>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Lokasi</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 KURMA — Keluarga Remaja Masjid Al-Ikhuwwah. Dibuat dengan ❤️</p>
        <div className="social-links">
          <a href="#" className="social-link">in</a>
          <a href="#" className="social-link">ig</a>
          <a href="#" className="social-link">yt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
