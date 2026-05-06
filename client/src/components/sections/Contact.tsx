import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="kontak">
      <div className="fade-in fade-left">
        <div className="section-label">Bergabung</div>
        <h2 className="section-title">Ayo Jadi Bagian dari KURMA</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: '3rem', lineHeight: '1.9' }}>Kami menerima anggota baru dengan tangan terbuka. Bergabunglah bersama kami dan jadilah bagian dari keluarga yang saling mendukung dalam kebaikan.</p>

        <div className="contact-info-item">
          <div className="contact-icon">🕌</div>
          <div>
            <h4>Alamat Masjid</h4>
            <p>Masjid Al-Ikhuwwah<br />Jl. Contoh No. 123, Bandung<br />Jawa Barat, 40123</p>
          </div>
        </div>

        <div className="contact-info-item">
          <div className="contact-icon">📱</div>
          <div>
            <h4>WhatsApp</h4>
            <p>+62 812 3456 7890<br />Senin – Sabtu, 08.00 – 20.00</p>
          </div>
        </div>

        <div className="contact-info-item">
          <div className="contact-icon">📧</div>
          <div>
            <h4>Email</h4>
            <p>kurma.alikhuwwah@gmail.com</p>
          </div>
        </div>
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
