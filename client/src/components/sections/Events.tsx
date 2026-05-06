import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Bell } from 'lucide-react';
import './Events.css';
import { getCmsData } from '../../services/api';

const Events: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [imgStatus, setImgStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCmsData();
      if (data && data.events) {
        setEvents(data.events);
      }
    };
    fetchData();
  }, []);

  const toggleModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isDetailModalOpen) {
      document.body.style.overflow = 'unset';
    }
  };

  const openDetail = (event: any) => {
    setSelectedEvent(event);
    setImgStatus('loading'); // Reset status saat buka detail baru
    setIsDetailModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDetail = () => {
    setIsDetailModalOpen(false);
    setSelectedEvent(null);
    if (!isModalOpen) {
      document.body.style.overflow = 'unset';
    }
  };

  const renderEventItem = (event: any, index: number) => (
    <div className="event-item clickable" key={index} onClick={() => openDetail(event)}>
      <div className="event-date">
        <span className="event-date-day">{event?.day || ''}</span>
        <div className="event-date-month">{event?.month || ''}</div>
      </div>
      <div className="event-info">
        <h4>{event?.title || ''}</h4>
        <span>{event?.time || ''}</span>
      </div>
      <span className={`event-badge badge-${event?.status || 'soon'}`}>{event?.statusLabel || 'Segera'}</span>
    </div>
  );

  return (
    <section className="events" id="jadwal">
      <div className="events-layout">
        <div className="events-sidebar fade-in fade-left">
          <div className="section-label">Agenda Kegiatan</div>
          <h2 className="section-title">Jadwal Terdekat</h2>
          <p>Ikuti berbagai kegiatan KURMA yang dirancang untuk mempererat ukhuwah dan mengembangkan potensi diri anggota.</p>
          <button onClick={toggleModal} className="btn-primary" style={{ display: 'inline-block', marginTop: '0.5rem', border: 'none', cursor: 'pointer' }}>Lihat Semua</button>
        </div>

        <div className="events-list fade-in fade-right">
          {events && events.length > 0 ? (
            events.slice(0, 5).map((event, index) => renderEventItem(event, index))
          ) : (
            <p>Memuat jadwal...</p>
          )}
        </div>
      </div>

      {/* Event List Modal Overlay (See All) */}
      {isModalOpen && (
        <div className="event-modal-overlay" onClick={toggleModal}>
          <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="event-modal-header">
              <h3 className="section-title">Semua Agenda Kegiatan</h3>
              <button className="close-modal" onClick={toggleModal}>&times;</button>
            </div>
            <div className="event-modal-body">
              <div className="modal-events-grid">
                {events.map((event, index) => renderEventItem(event, index))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Detail Modal Overlay */}
      {isDetailModalOpen && selectedEvent && (
        <div className="detail-modal-overlay" onClick={closeDetail}>
          <div className="detail-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-detail" onClick={closeDetail}>&times;</button>
            <div className="detail-modal-body">
              <div className="detail-poster">
                {selectedEvent.img ? (
                  <>
                    {imgStatus === 'loading' && (
                      <div className="img-loading-spinner">
                        <div className="spinner"></div>
                        <p>Memproses Gambar...</p>
                      </div>
                    )}
                    {imgStatus === 'error' && (
                      <div className="img-error-msg">
                        <span>⚠️</span>
                        <p>Gambar gagal diproses.<br/>Pastikan link valid dan akses publik aktif.</p>
                      </div>
                    )}
                    <img 
                      src={selectedEvent.img} 
                      alt={selectedEvent.title} 
                      style={{ display: imgStatus === 'success' ? 'block' : 'none' }}
                      onLoad={() => setImgStatus('success')}
                      onError={() => setImgStatus('error')}
                      referrerPolicy="no-referrer"
                    />
                  </>
                ) : (
                  <div className="poster-placeholder">
                    <span>Poster Belum Tersedia</span>
                  </div>
                )}
              </div>
              <div className="detail-info">
                <div className="section-label">Detail Kegiatan</div>
                <h2 className="section-title">{selectedEvent.title}</h2>
                <div className="detail-meta">
                  <div className="meta-item">
                    <Calendar size={18} strokeWidth={2} />
                    <span><strong>Waktu:</strong> {selectedEvent.day} {selectedEvent.month}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={18} strokeWidth={2} />
                    <span><strong>Lokasi & Jam:</strong> {selectedEvent.time}</span>
                  </div>
                  <div className="meta-item">
                    <Bell size={18} strokeWidth={2} />
                    <span><strong>Status:</strong> {selectedEvent.statusLabel}</span>
                  </div>
                </div>
                <div className="detail-description">
                  <p>Pastikan kamu hadir tepat waktu dan mengajak teman-teman yang lain untuk mengikuti kegiatan ini. Mari kita tingkatkan ukhuwah dan ketaqwaan bersama KURMA.</p>
                </div>
                <a href="#kontak" onClick={closeDetail} className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>Daftar / Tanya Admin</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
