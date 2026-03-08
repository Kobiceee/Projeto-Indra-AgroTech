import { useState, useEffect } from 'react'
import '../css/Indra.css'
import Footer from '../components/Footer'
import indraImage from '../assets/img/Indra.png'
// eslint-disable-next-line no-unused-vars
import bannerImage from '../assets/img/bannerindra.png'
// eslint-disable-next-line no-unused-vars
import fundoImage from '../assets/img/FundoLIMPO.png'
// eslint-disable-next-line no-unused-vars
import logoImage from '../assets/img/Logo indra.png'


function Home() {
  const [redisState, setRedisState] = useState({
    instagram: { visible: false },
    linkedin: { visible: false },
    github: { visible: false }
  })

  useEffect(() => {
    const handleInstagram = () => {
      setRedisState(prev => ({
        ...prev,
        instagram: {
          visible: true,
          data: {
            title: 'Instagram',
            links: [
              { name: 'Hendrik', url: 'https://www.instagram.com/kobiceee' },
              { name: 'Taua', url: '' },
              { name: 'Andrey', url: '' },
              { name: 'Fabio', url: '' },
              { name: 'Felipe', url: '' }
            ]
          }
        }
      }))
      setTimeout(() => {
        document.querySelector('.inserir_redes')?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }

    const handleLinkedin = () => {
      setRedisState(prev => ({
        ...prev,
        linkedin: {
          visible: true,
          data: {
            title: 'LinkedIn',
            links: [
              { name: 'Hendrik', url: 'https://www.linkedin.com/in/hendrik-bernardes-obice-2913842bb' },
              { name: 'Taua', url: '' },
              { name: 'Andrey', url: '' },
              { name: 'Fabio', url: '' },
              { name: 'Felipe', url: '' }
            ]
          }
        }
      }))
      setTimeout(() => {
        document.querySelector('.inserir_redes')?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }

    const handleGithub = () => {
      setRedisState(prev => ({
        ...prev,
        github: {
          visible: true,
          data: {
            title: 'GitHub',
            links: [
              { name: 'Hendrik', url: 'https://github.com/Kobiceee' },
              { name: 'Taua', url: '' },
              { name: 'Andrey', url: '' },
              { name: 'Fabio', url: '' },
              { name: 'Felipe', url: '' }
            ]
          }
        }
      }))
      setTimeout(() => {
        document.querySelector('.inserir_redes')?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }

    const btnIg = document.getElementById('btn-ig')
    const btnIn = document.getElementById('btn-in')
    const btnGit = document.getElementById('btn-git')

    if (btnIg) btnIg.addEventListener('click', handleInstagram)
    if (btnIn) btnIn.addEventListener('click', handleLinkedin)
    if (btnGit) btnGit.addEventListener('click', handleGithub)

    return () => {
      if (btnIg) btnIg.removeEventListener('click', handleInstagram)
      if (btnIn) btnIn.removeEventListener('click', handleLinkedin)
      if (btnGit) btnGit.removeEventListener('click', handleGithub)
    }
  }, [])

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
                    {type === 'instagram' && <i className="fa-brands fa-instagram"></i>}
                    {type === 'linkedin' && <i className="fa-brands fa-linkedin"></i>}
                    {type === 'github' && <i className="fa-brands fa-github"></i>}
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

      <h1>
        Indra: A Semente da Esperança em Código <hr />
      </h1>

      <p className="AjusteA">
        A <strong>Indra</strong> é uma <strong>Inteligência Artificial</strong> desenvolvida para apoiar o cultivo inteligente e sustentável.
        Ela fornece ao usuário informações essenciais sobre suas plantas: identifica se o solo está com falta de nutrientes,
        se o vaso é do tamanho ideal, se a iluminação e ventilação são adequadas e até se o uso de fertilizantes é necessário.
      </p>

      <div className="links-extras">
        📺{' '}
        <a
          className="youtube-link"
          href="https://youtu.be/F28Uld5u1Hg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vídeo IA
        </a>
      </div>

      <h2>Como a Indra funciona</h2>
      <p className="AjusteB">
        A IA realiza análises com base em dados fornecidos pelo usuário e sensores,
        sugerindo ações personalizadas para melhorar o crescimento das plantas.
        Dessa forma, a Indra une tecnologia e natureza, tornando o cuidado com o cultivo algo mais acessível, prático e sustentável.
      </p>

      <h2>Nosso propósito</h2>
      <p>
        Mais do que uma ferramenta de monitoramento, a Indra é uma iniciativa voltada para o futuro —
        ajudando pessoas a cultivarem com consciência e esperança, unindo a tecnologia ao cuidado com o planeta.
      </p>
      <h4>Entre em contato conosco:</h4>
      <br />
      <a href="/contato#form_info" className="btn-contato">
        Clique Aqui
      </a>

      <div className="inserir_redes">
        {renderModal('instagram')}
        {renderModal('linkedin')}
        {renderModal('github')}
      </div>

      <Footer />
    </div>
  )
}

export default Home
