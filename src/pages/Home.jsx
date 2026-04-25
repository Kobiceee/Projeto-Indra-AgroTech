import '../css/Indra.css'
import Footer from '../components/Footer'
import FeedbackSection from '../components/FeedbackSection'
import indraImage from '../assets/img/Indra.png'
// eslint-disable-next-line no-unused-vars
import bannerImage from '../assets/img/bannerindra.png'
// eslint-disable-next-line no-unused-vars
import fundoImage from '../assets/img/FundoLIMPO.png'
// eslint-disable-next-line no-unused-vars
import logoImage from '../assets/img/Logo indra.png'


function Home() {
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

      <FeedbackSection />
      <Footer />
    </div>
  )
}

export default Home
