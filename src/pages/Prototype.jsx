import { useState } from 'react'
import '../css/Indra3.css'
import Footer from '../components/Footer'
import indraImage from '../assets/img/Indra.png'
// eslint-disable-next-line no-unused-vars
import bannerImage from '../assets/img/bannerindra.png'
// eslint-disable-next-line no-unused-vars
import fundoImage from '../assets/img/FundoLIMPO.png'
// eslint-disable-next-line no-unused-vars
import logoImage from '../assets/img/Logo indra.png'

import '../css/ServicesGallery.css';

export default function Prototype() {
  const [filter, setFilter] = useState('Todos');

  const services = [
    { id: 1, title: 'Consultoria Indra', category: 'Gestão', icon: 'fa-chart-line', desc: 'Otimização de processos internos e inteligência de negócio.' },
    { id: 2, title: 'Design de Interface', category: 'Design', icon: 'fa-pen-nib', desc: 'Criação de experiências visuais únicas e intuitivas.' },
    { id: 3, title: 'Estratégia Digital', category: 'Marketing', icon: 'fa-bullhorn', desc: 'Posicionamento de marca e autoridade no mercado digital.' },
    { id: 4, title: 'Desenvolvimento Web', category: 'Design', icon: 'fa-code', desc: 'Criação de sites responsivos, rápidos e otimizados.' },
  ];

  const filteredItems = filter === 'Todos' 
    ? services 
    : services.filter(item => item.category === filter);

  return (
    <div id="container">
      <div 
        className="banner" 
        style={{ backgroundImage: `url(${indraImage})` }}
      ></div>

      <h1>Protótipo Indra <hr /></h1>

      <section className="services-section">
        <div className="container">
          <div className="header-content">
            <span className="top-title">Nossa Expertise</span>
            <h2>Nossos Serviços</h2>
            <div className="underline"></div>
          </div>
          
          <div className="filter-buttons">
            {['Todos', 'Gestão', 'Design', 'Marketing'].map(cat => (
              <button 
                key={cat}
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredItems.map(service => (
              <div key={service.id} className="service-card">
                <div className="icon-box">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <span className="badge">{service.category}</span>
                <p>{service.desc}</p>
                <div className="card-footer">
                  <span>Saiba mais</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
