import { useState } from 'react'

function Footer() {
  const [redisState, setRedisState] = useState({
    instagram: { visible: false },
    linkedin: { visible: false },
    github: { visible: false }
  })

  const handleSocialClick = (type) => {
    const socialData = {
      instagram: {
        title: 'Instagram',
        icon: 'fa-instagram',
        links: [
          { name: 'Hendrik', url: 'https://www.instagram.com/kobiceee' },
          { name: 'Taua', url: '' },
          { name: 'Andrey', url: '' },
          { name: 'Fabio', url: '' },
          { name: 'Felipe', url: '' }
        ]
      },
      linkedin: {
        title: 'LinkedIn',
        icon: 'fa-linkedin',
        links: [
          { name: 'Hendrik', url: 'https://www.linkedin.com/in/hendrik-bernardes-obice-2913842bb' },
          { name: 'Taua', url: '' },
          { name: 'Andrey', url: '' },
          { name: 'Fabio', url: '' },
          { name: 'Felipe', url: '' }
        ]
      },
      github: {
        title: 'GitHub',
        icon: 'fa-github',
        links: [
          { name: 'Hendrik', url: 'https://github.com/Kobiceee' },
          { name: 'Taua', url: '' },
          { name: 'Andrey', url: '' },
          { name: 'Fabio', url: '' },
          { name: 'Felipe', url: '' }
        ]
      }
    }

    setRedisState(prev => ({
      ...prev,
      [type]: {
        visible: true,
        data: socialData[type]
      }
    }))

    setTimeout(() => {
      document.querySelector('.inserir_redes')?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

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
    <>
      <footer className="rodape">
        <div className="redes">
          <p>Quer saber mais sobre os programadores? Aqui estão nossas redes sociais!</p>
          <button
            id="btn-in"
            onClick={() => handleSocialClick('linkedin')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </button>
          <button
            id="btn-ig"
            onClick={() => handleSocialClick('instagram')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
          >
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button
            id="btn-git"
            onClick={() => handleSocialClick('github')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
          >
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
        <div className="rodape-bottom">
          <p>© 2026 <strong>Indra</strong> — Desenvolvido pelo Grupo 03 — Todos os direitos reservados.</p>
        </div>
      </footer>

      <div className="inserir_redes">
        {renderModal('instagram')}
        {renderModal('linkedin')}
        {renderModal('github')}
      </div>
    </>
  )
}

export default Footer
