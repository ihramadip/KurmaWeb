import React, { useEffect, useState } from 'react';
import './Team.css';
import { getCmsData } from '../../services/api';

const Team: React.FC = () => {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching Team data...');
      const data = await getCmsData();
      console.log('Team data received:', data?.team);
      if (data && data.team) {
        setMembers(data.team);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="pengurus" id="pengurus">
      <div className="fade-in fade-up" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Kepengurusan</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Tim Pengurus KURMA</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto' }}>Dijalankan dengan penuh dedikasi oleh generasi muda yang berkomitmen.</p>
      </div>

      <div className="pengurus-grid">
        {members && members.length > 0 ? (
          members.map((member, index) => (
            <div className="pengurus-card fade-in fade-up" key={index} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="pengurus-avatar">{member?.initial || '?'}</div>
              <div className="pengurus-name">{member?.name || 'Nama Pengurus'}</div>
              <div className="pengurus-role">{member?.role || 'Jabatan'}</div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '2rem' }}>
            <p>Memuat tim pengurus...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
