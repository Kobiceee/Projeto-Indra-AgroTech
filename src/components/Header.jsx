import { Link } from 'react-router-dom'
import '../css/Indra.css'

function Header() {
  return (
    <header className="container_topo">
      <div className="logo">
        <Link to="/">
          <img src="/src/assets/img/Logo indra.png" alt="Logo Indra" className="logo" id="home" />
        </Link>
      </div>
      <nav>
        <ul>
          <li className="li-cabeca">
            <Link to="/" className="link">Home</Link>
            <p className="barra">|</p>
            <Link to="/sobre" className="link">Sobre nós</Link>
            <p className="barra">|</p>
            <Link to="/contato" className="link">Contato</Link>
            <p className="barra">|</p>
            <Link to="/prototipo" className="link">Protótipo</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
