import React from 'react';
import './Team.css';

const Team: React.FC = () => {
  const members = [
    { initial: "A", name: "Ahmad Fauzan", role: "Ketua Umum" },
    { initial: "F", name: "Farah Nabilah", role: "Sekretaris" },
    { initial: "R", name: "Rizky Hamdani", role: "Bendahara" },
    { initial: "S", name: "Salma Aulia", role: "Div. Keputrian" },
    { initial: "M", name: "Muhammad Iqbal", role: "Div. Dakwah" },
    { initial: "D", name: "Dina Rahmawati", role: "Div. Pendidikan" },
    { initial: "H", name: "Hasan Albana", role: "Div. Olahraga" },
    { initial: "N", name: "Nurul Hidayah", role: "Div. Sosial" }
  ];

  return (
    <section className="pengurus" id="pengurus">
      <div className="fade-in fade-up" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Kepengurusan</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Tim Pengurus KURMA</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto' }}>Dijalankan dengan penuh dedikasi oleh generasi muda yang berkomitmen.</p>
      </div>

      <div className="pengurus-grid">
        {members.map((member, index) => (
          <div className="pengurus-card fade-in fade-up" key={index} style={{ transitionDelay: `${index * 80}ms` }}>
            <div className="pengurus-avatar">{member.initial}</div>
            <div className="pengurus-name">{member.name}</div>
            <div className="pengurus-role">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
