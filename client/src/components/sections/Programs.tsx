import React, { useEffect, useState } from 'react';
import { BookOpen, Languages, Heart, Activity, Target, Compass, type LucideIcon } from 'lucide-react';
import './Programs.css';
import { getCmsData } from '../../services/api';

const IconMap: Record<string, LucideIcon> = {
  BookOpen,
  Languages,
  Heart,
  Activity,
  Target,
  Compass,
};

const Programs: React.FC = () => {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCmsData();
      if (data && data.programs) {
        setPrograms(data.programs);
      }
    };
    fetchData();
  }, []);

  const renderIcon = (iconName: string) => {
    const IconComponent = IconMap[iconName];
    return IconComponent ? <IconComponent size={24} strokeWidth={1.5} /> : <BookOpen size={24} strokeWidth={1.5} />;
  };

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
        {programs.length > 0 ? (
          programs.map((prog, index) => (
            <div className="program-card fade-in zoom-in" key={index} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="program-icon">{renderIcon(prog?.icon || '')}</div>
              <h3>{prog?.title || 'Program'}</h3>
              <p>{prog?.desc || ''}</p>
              <span className="program-tag">{prog?.tag || ''}</span>
            </div>
          ))
        ) : (
          <div className="programs-loading">
            <p>Memuat program...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;
