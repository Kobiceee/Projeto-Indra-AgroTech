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

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })
  const [submitted, setSubmitted] = useState(false)

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

  return (
    <div id="container">
      <div 
          className="banner" 
          style={{ backgroundImage: `url(${indraImage})` }}
        ></div>

      <h1>Cultive o Futuro com a Gente <hr /></h1>

      <h2>Fale Conosco</h2>

      <section id="prototipo" className="fale-conosco">
        <p className="intro-contato">
          Acreditamos que grandes ideias florescem quando são compartilhadas. Se você quer saber mais sobre o projeto, propor uma parceria, ou enviar ideias sobre tecnologia e sustentabilidade, fale com a gente.
        </p>

        <form className="form-contato" id="form_cadastro" onSubmit={handleSubmit}>
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

      <Footer />
    </div>
  )
}

export default Contact
