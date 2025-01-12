import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './style.css'; // CSS dosyası

const CV = () => {
  return (
    <div className="cv-container">
      <h1 className="cv-header">Murat Bozoğlu</h1>
      
      <section className="contact-info">
        <h2>İletişim Bilgileri</h2>
        <p><strong>Email:</strong> murat.bozoglu@kun.edu.tr</p>
        <p><strong>Telefon:</strong> 0555 555 55 55</p>
      </section>

      <section className="work-experience">
        <h2>İş Deneyimi</h2>
        <p><strong>Çalıştığı Kurum:</strong> Türkiye Ürün ve İhtisas Borsası</p>
        <p><strong>Pozisyon:</strong> Kıdemli Bilgi Teknolojileri Uzmanı</p>
        <p><strong>Çalışma Dönemi:</strong> 2021 - Devam Ediyor</p>
      </section>

      <section className="education">
        <h2>Eğitim</h2>
        <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
        <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
        <p><strong>Dönem:</strong> 2023 - 2025</p>
      </section>

      <section className="hobbies">
        <h2>Hobiler</h2>
        <ul>
          <li>Satranç oynamak</li>
          <li>Teknoloji blogları okumak</li>
          <li>Seyahat etmek</li>
        </ul>
      </section>

      <section className="social-media">
        <h2>Sosyal Medya</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/murat-bozo%C4%9Flu-758420198/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
