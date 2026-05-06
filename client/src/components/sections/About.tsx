import React, { useEffect, useState } from 'react';
import './About.css';
import { getCmsData } from '../../services/api';

const About: React.FC = () => {
  const [values, setValues] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCmsData();
      if (data && data.values) {
        setValues(data.values);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="about" id="tentang">
      <div className="about-visual fade-in fade-left">
        <div className="about-card-main">
          <div className="about-ornament"></div>
          <p className="about-quote">
            "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain."
          </p>
          <div className="about-quote-attr">— HR. Ahmad & Thabrani</div>
        </div>
        <div className="about-badge">
          <span className="about-badge-num">2019</span>
          <div className="about-badge-text">Tahun Berdiri</div>
        </div>
      </div>

      <div className="about-text fade-in fade-right">
        <div className="section-label">Tentang Kami</div>
        <h2 className="section-title">Komunitas Remaja yang Berakar pada Masjid</h2>
        <p>KURMA — Keluarga Remaja Masjid Al-Ikhuwwah adalah organisasi kepemudaan yang lahir dari semangat membangun generasi muda muslim yang berilmu, berkarakter, dan bermanfaat.</p>
        <p>Kami percaya bahwa masjid bukan hanya tempat ibadah, tetapi juga pusat peradaban dan pemberdayaan generasi muda yang siap menghadapi tantangan zaman.</p>

        <div className="about-values">
          {values.length > 0 ? (
            values.map((val, index) => (
              <div className="value-item" key={index}>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))
          ) : (
            <>
              <div className="value-item">
                <h4>Keimanan</h4>
                <p>Memperkuat pondasi aqidah dan ibadah sehari-hari</p>
              </div>
              <div className="value-item">
                <h4>Keilmuan</h4>
                <p>Menumbuhkan semangat belajar dan mengkaji ilmu</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
