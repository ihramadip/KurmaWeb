import React from 'react';
import './Marquee.css';

const Marquee: React.FC = () => {
  const items = [
    "Pengajian Rutin", "Kajian Quran", "Sosial Kemasyarakatan",
    "Olahraga & Seni", "Rihlah & Wisata Ilmu", "Pelatihan Kepemimpinan"
  ];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-item marquee-sep">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
