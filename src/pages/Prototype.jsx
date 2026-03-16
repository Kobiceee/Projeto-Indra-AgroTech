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
    { id: 1, title: 'Monitoramento de Cultivos', category: 'Monitoramento', icon: 'fa-chart-line', desc: 'Acompanhamento em tempo real das condições da plantação, incluindo umidade do solo, temperatura e saúde das culturas.' },
    { id: 2, title: 'Interface do Produtor', category: 'Design', icon: 'fa-pen-nib', desc: 'Painel intuitivo para agricultores visualizarem dados da lavoura, alertas e relatórios de produção.' },
    { id: 3, title: 'Análise Inteligente', category: 'Análise', icon: 'fa-bullhorn', desc: 'Uso de algoritmos para prever produtividade, detectar problemas na lavoura e sugerir melhorias.' },
    { id: 4, title: 'Automação Agrícola', category: 'Automação', icon: 'fa-code', desc: 'Integração com sensores e sistemas automáticos para irrigação e controle eficiente da produção.' },
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
            {['Todos', 'Monitoramento', 'Design', 'Análise', 'Automação'].map(cat => (
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
