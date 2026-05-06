import React from 'react';
import './Events.css';

const Events: React.FC = () => {
  const events = [
    { day: "11", month: "Mei 2025", title: "Kajian Ahad Pagi — Tafsir Juz 30", time: "08.00 – 09.30 WIB · Masjid Al-Ikhuwwah", status: "open", statusLabel: "Terbuka" },
    { day: "15", month: "Mei 2025", title: "Tahsin Al-Quran — Kelas Pemula", time: "19.30 – 21.00 WIB · Aula Masjid", status: "open", statusLabel: "Terbuka" },
    { day: "22", month: "Mei 2025", title: "Bakti Sosial & Santunan Anak Yatim", time: "07.00 – 12.00 WIB · Lingkungan Masjid", status: "soon", statusLabel: "Segera" },
    { day: "01", month: "Jun 2025", title: "Leadership Camp KURMA 2025", time: "Sabtu–Ahad · Villa Al-Amin, Lembang", status: "soon", statusLabel: "Segera" },
    { day: "14", month: "Jun 2025", title: "Rihlah Ilmiah — Pesantren Gontor Putra", time: "Sabtu–Ahad · Ponorogo, Jawa Timur", status: "soon", statusLabel: "Segera" }
  ];

  return (
    <section className="events" id="jadwal">
      <div className="events-layout">
        <div className="events-sidebar fade-in fade-left">
          <div className="section-label">Agenda Kegiatan</div>
          <h2 className="section-title">Jadwal Terdekat</h2>
          <p>Ikuti berbagai kegiatan KURMA yang dirancang untuk mempererat ukhuwah dan mengembangkan potensi diri anggota.</p>
          <a href="#" className="btn-primary" style={{ display: 'inline-block', marginTop: '0.5rem' }}>Lihat Semua</a>
        </div>

        <div className="events-list fade-in fade-right">
          {events.map((event, index) => (
            <div className="event-item" key={index}>
              <div className="event-date">
                <span className="event-date-day">{event.day}</span>
                <div className="event-date-month">{event.month}</div>
              </div>
              <div className="event-info">
                <h4>{event.title}</h4>
                <span>{event.time}</span>
              </div>
              <span className={`event-badge badge-${event.status}`}>{event.statusLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
