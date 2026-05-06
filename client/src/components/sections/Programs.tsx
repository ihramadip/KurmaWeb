import React from 'react';
import { BookOpen, Languages, Heart, Activity, Target, Compass } from 'lucide-react';
import './Programs.css';

const Programs: React.FC = () => {
  const programs = [
    { 
      icon: <BookOpen size={24} strokeWidth={1.5} />, 
      title: "Kajian Rutin", 
      desc: "Kajian mingguan yang membahas fiqih, tafsir, sirah nabawiyah, dan akhlak dengan pembimbing ustadz berpengalaman.", 
      tag: "Setiap Ahad" 
    },
    { 
      icon: <Languages size={24} strokeWidth={1.5} />, 
      title: "Tahsin & Tahfidz", 
      desc: "Program perbaikan bacaan Al-Quran dan hafalan yang terstruktur dengan metode yang mudah dan menyenangkan.", 
      tag: "Setiap Selasa & Kamis" 
    },
    { 
      icon: <Heart size={24} strokeWidth={1.5} />, 
      title: "Sosial & Dakwah", 
      desc: "Kegiatan bakti sosial, santunan anak yatim, dan program dakwah kepada masyarakat sekitar masjid.", 
      tag: "Bulanan" 
    },
    { 
      icon: <Activity size={24} strokeWidth={1.5} />, 
      title: "Olahraga & Seni", 
      desc: "Memfasilitasi bakat dan minat anggota dalam bidang olahraga, seni kaligrafi, nasyid, dan kesenian Islami.", 
      tag: "Sabtu Sore" 
    },
    { 
      icon: <Target size={24} strokeWidth={1.5} />, 
      title: "Leadership Training", 
      desc: "Pelatihan kepemimpinan, public speaking, dan manajemen organisasi untuk mencetak pemimpin masa depan.", 
      tag: "Tahunan" 
    },
    { 
      icon: <Compass size={24} strokeWidth={1.5} />, 
      title: "Rihlah Ilmiah", 
      desc: "Perjalanan wisata ilmu ke pesantren, museum Islam, dan tempat bersejarah untuk memperluas wawasan keislaman.", 
      tag: "Semester" 
    }
  ];

  return (
    <section className="programs" id="program">
      <div className="programs-header fade-in fade-up">
        <div>
          <div className="section-label">Program Unggulan</div>
          <h2 className="section-title">Apa yang Kami Lakukan</h2>
        </div>
        <a href="#kontak" className="btn-ghost">Semua Program</a>
      </div>

      <div className="programs-grid">
        {programs.map((prog, index) => (
          <div className="program-card fade-in zoom-in" key={index} style={{ transitionDelay: `${index * 80}ms` }}>
            <div className="program-icon">{prog.icon}</div>
            <h3>{prog.title}</h3>
            <p>{prog.desc}</p>
            <span className="program-tag">{prog.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
