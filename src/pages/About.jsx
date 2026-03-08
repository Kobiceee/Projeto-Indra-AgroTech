import { useState } from 'react'
import '../css/Indra2.css'
import Footer from '../components/Footer'
import indraImage from '../assets/img/Indra.png'
// eslint-disable-next-line no-unused-vars
import bannerImage from '../assets/img/bannerindra.png'
// eslint-disable-next-line no-unused-vars
import fundoImage from '../assets/img/FundoLIMPO.png'
// eslint-disable-next-line no-unused-vars
import logoImage from '../assets/img/Logo indra.png'

function About() {
  const [redisState, setRedisState] = useState({
    instagram: { visible: false },
    linkedin: { visible: false },
    github: { visible: false }
  })

  const closeModal = (type) => {
    setRedisState(prev => ({
      ...prev,
      [type]: { visible: false }
    }))
  }

  const renderModal = (type) => {
    const state = redisState[type]
    if (!state.visible || !state.data) return null

    return (
      <section className="redes-container">
        <div className="redes-container" id="container">
          <button
            onClick={() => closeModal(type)}
            className="close-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
          >
            ✕
          </button>
          <h2>Conecte-se com a gente</h2>
          <h3>{state.data.title}</h3>
          <div className="redes-links">
            {state.data.links.map((link, idx) => (
              <p key={idx}>
                <u>
                  <a href={link.url || '#'} target="_blank" rel="noopener noreferrer">
                    {link.name}
                    <i className={`fa-brands ${state.data.icon}`}></i>
                  </a>
                </u>
              </p>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div id="container">
      <div 
          className="banner" 
          style={{ backgroundImage: `url(${indraImage})` }}
        ></div>

      <h1>Quem Somos — The Future Is Now <hr /></h1>

      <p className="AjusteA">
        Somos a <strong>The Future Is Now</strong>, um grupo de estudantes de <strong>Engenharia de Software</strong> da <strong>FIAP</strong>
        que acredita no poder da tecnologia para transformar o mundo. Nosso propósito é usar a inovação digital como um meio para combater
        a fome e promover a sustentabilidade, criando soluções que realmente façam a diferença na vida das pessoas.
      </p>

      <h2>Os Desafios Que Enfrentamos</h2>
      <p className="AjusteB">
        Ainda hoje, milhões de pessoas enfrentam a fome e a insegurança alimentar no mundo.
        Sabemos que o problema vai muito além da falta de alimentos — envolve desigualdade, mudanças climáticas e acesso limitado à informação.
        Foi pensando nisso que criamos a <strong>Indra</strong>, uma inteligência artificial voltada a ajudar pequenos produtores e comunidades
        a cultivarem de forma mais eficiente, sustentável e inteligente.
      </p>

      <p>
        Nosso objetivo é simples: unir conhecimento e tecnologia para garantir que o cultivo sustentável se torne uma realidade acessível a todos.
        Acreditamos que pequenas ações podem gerar grandes mudanças, principalmente quando combinamos empatia, inovação e propósito.
      </p>

      <h2>Missão</h2>
      <p>
        Desenvolver soluções tecnológicas que ajudem pessoas e comunidades a cultivar de forma sustentável,
        melhorando o acesso à alimentação e reduzindo o impacto ambiental.
      </p>

      <h2>Visão</h2>
      <p>
        Ser reconhecidos como um projeto que usa a tecnologia para gerar impacto social positivo,
        contribuindo para um futuro em que a fome seja apenas uma lembrança do passado.
      </p>

      <h2>Valores</h2>
      <ul>
        <li><strong>Sustentabilidade:</strong> cuidar do planeta e incentivar o uso consciente dos recursos naturais.</li>
        <li><strong>Inovação:</strong> buscar sempre novas ideias que possam transformar vidas.</li>
        <li><strong>Empatia:</strong> entender as dificuldades das pessoas e trabalhar para superá-las com respeito e humanidade.</li>
        <li><strong>Colaboração:</strong> crescer junto, compartilhando conhecimento e apoiando uns aos outros.</li>
        <li><strong>Transparência:</strong> agir com ética, clareza e responsabilidade em tudo o que fazemos.</li>
      </ul>

      <h2>Citação Inspiradora</h2>
      <blockquote>
        "A inovação é essencial para resolver os maiores desafios do planeta.
        Precisamos usar a tecnologia para construir um futuro sustentável e mais justo para todos."
        <br />— <em>Bill Gates</em>
      </blockquote>

      <div className="links-extras">
        🌱{' '}
        <a
          className="youtube-link"
          href="https://brasil.un.org/pt-br/sdgs/2"
          target="_blank"
          rel="noopener noreferrer"
        >
          ODS 2 — Fome Zero e Agricultura Sustentável
        </a>
      </div>

      <div className="inserir_redes">
        {renderModal('instagram')}
        {renderModal('linkedin')}
        {renderModal('github')}
      </div>

      <Footer />
    </div>
  )
}

export default About
