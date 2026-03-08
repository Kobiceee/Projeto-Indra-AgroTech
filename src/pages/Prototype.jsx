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

function Prototype() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [redisState, setRedisState] = useState({
    instagram: { visible: false },
    linkedin: { visible: false },
    github: { visible: false }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const { nome, email, mensagem } = formData

    if (nome.trim() === '') {
      alert('Por favor, preencha o seu nome completo.')
      return false
    }

    const partes = nome.trim().split(' ').filter(p => p.length > 0)

    if (partes.length < 2) {
      alert('Por favor, insira também o seu sobrenome.')
      return false
    }

    if (partes[0].length < 2 || partes[1].length < 2) {
      alert('Nome e sobrenome devem ter ao menos 2 letras cada.')
      return false
    }

    if (email.trim() === '') {
      alert('Por favor, preencha o seu e-mail.')
      return false
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Por favor, insira um e-mail válido.')
      return false
    }

    if (mensagem.trim() === '') {
      alert('Por favor, escreva sua mensagem.')
      return false
    }

    if (mensagem.length > 500) {
      alert('Sua mensagem deve ter no máximo 500 caracteres.')
      return false
    }

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log(formData.nome, formData.email, formData.mensagem)
      setSubmitted(true)
      setFormData({ nome: '', email: '', mensagem: '' })
      setTimeout(() => {
        document.querySelector('.inserir_div')?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
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
    <div id="container">
      <div 
            className="banner" 
            style={{ backgroundImage: `url(${indraImage})` }}
          ></div>

      <h1>Protótipo em Desenvolvimento <hr /></h1>

      <p className="intro-contato">
        A <strong>Indra</strong> está em constante evolução.
        Neste momento, nossa equipe trabalha para cultivar uma experiência ainda mais inteligente e sustentável —
        integrando tecnologia, natureza e cuidado em um só ecossistema digital.
      </p>

      <div className="loader"></div>
      <p className="subtext">Estamos germinando algo novo. Em breve, você poderá conhecer o resultado.</p>

      <div className="cadastro">
        <h2>Quer ser avisado quando lançarmos?</h2>
        <section id="prototipo" className="fale-conosco">
          <p>
            Inscreva-se abaixo para receber uma notificação assim que o protótipo estiver disponível.
            Faça parte das primeiras pessoas a explorar o futuro do cultivo consciente com a Indra.
          </p>
          <form className="form__cadastro" id="form_cadastro" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem (máx. 500 caracteres)"
                maxLength="500"
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" id="btn-enviar">Enviar</button>
          </form>
        </section>
      </div>

      <div className="inserir_div">
        {submitted && (
          <div id="container" className="fim">
            <p className="agradecimento">
              Agradecemos pelo seu interesse <u>{formData.nome}</u>!<br />
              Juntos, podemos cultivar um futuro mais verde e consciente.
            </p>
          </div>
        )}
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

export default Prototype
