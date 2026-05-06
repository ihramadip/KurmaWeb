import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, type LucideIcon } from 'lucide-react';
import './Contact.css';
import { getCmsData } from '../../services/api';

const IconMap: Record<string, LucideIcon> = {
  '🕌': MapPin,
  '📱': Phone,
  '📧': Mail,
  'Alamat': MapPin,
  'WhatsApp': Phone,
  'Email': Mail
};

const Contact: React.FC = () => {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCmsData();
      if (data && data.contacts) {
        setContacts(data.contacts);
      }
    };
    fetchData();
  }, []);

  const renderIcon = (iconData: string, title: string) => {
    // Cek di Map berdasarkan emoji atau Judul Platform
    const IconComponent = IconMap[iconData] || IconMap[title] || Mail;
    return <IconComponent size={24} strokeWidth={1.5} />;
  };

  return (
    <section className="contact" id="kontak">
      <div className="fade-in fade-left">
        <div className="section-label">Bergabung</div>
        <h2 className="section-title">Ayo Jadi Bagian dari KURMA</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: '3rem', lineHeight: '1.9' }}>Kami menerima anggota baru dengan tangan terbuka. Bergabunglah bersama kami dan jadilah bagian dari keluarga yang saling mendukung dalam kebaikan.</p>

        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <div className="contact-info-item" key={index}>
              <div className="contact-icon">
                {renderIcon(contact?.icon, contact?.platform || contact?.title)}
              </div>
              <div>
                <h4>{contact?.title || 'Informasi'}</h4>
                <p dangerouslySetInnerHTML={{ __html: (contact?.content || '').replace(/\n/g, '<br />') }}></p>
              </div>
            </div>
          ))
        ) : (
          <div className="contact-loading">
            <p>Memuat kontak...</p>
          </div>
        )}
      </div>

      <div className="fade-in fade-right">
        <div className="contact-form-container">
          <div className="form-ornament"></div>
          <h3 className="form-title">Formulir Pendaftaran</h3>
          <form className="contact-form">
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama lengkap kamu" />
            </div>
            <div className="form-group">
              <label>Nomor WhatsApp</label>
              <input type="tel" placeholder="+62 812 xxxx xxxx" />
            </div>
            <div className="form-group">
              <label>Usia</label>
              <select defaultValue="">
                <option value="" disabled>— Pilih rentang usia —</option>
                <option>13 – 15 tahun</option>
                <option>16 – 18 tahun</option>
                <option>19 – 22 tahun</option>
                <option>22+ tahun</option>
              </select>
            </div>
            <div className="form-group">
              <label>Pesan / Motivasi</label>
              <textarea placeholder="Ceritakan motivasimu bergabung dengan KURMA..."></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>Kirim Pendaftaran</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
