import logoBranca from "../../assets/icon/logoBranca.png";
import { Link } from "react-router-dom";
import { useMenu } from '../../hooks/useMenu';

export default function Header() {
  const { isMenuOpen, toggleMenu, handleLinkClick } = useMenu();
  return (
    <>
      <ul className={`menu-mobile ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/catalogo" className="nav-link" onClick={handleLinkClick}>Catálogo</Link>
        </li>
        <li>
          <Link to="/planos" className="nav-link" onClick={handleLinkClick}>Planos</Link>
        </li>
        <li>
          <Link to="/contato" className="nav-link" onClick={handleLinkClick}>Contato</Link>
        </li>
        <li>
          <Link to="/sobre-nos" className="nav-link" onClick={handleLinkClick}>Sobre nós</Link>
        </li>
        <li>
          <Link to="/carrinho" onClick={handleLinkClick} className="compra">
            <i className="fa-solid fa-cart-shopping"></i>Carrinho
          </Link>
        </li>
        <li>
          <Link to="/login" className="botao-login" onClick={handleLinkClick}>
            <i className="fa-solid fa-user"></i>Entrar
          </Link>
        </li>
      </ul>
      <header className="navbar-principal">
        <div className="itens-navbar">
          <div className="logo-navbar">
            <img src={logoBranca} alt="Logo Livraê" />
            <span className="title-navbar">Livraê</span>
          </div>
          <ul className="menu-navegador">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/catalogo" className="nav-link">Catálogo</Link>
            </li>
            <li>
              <Link to="/planos" className="nav-link">Planos</Link>
            </li>
            <li>
              <Link to="/contato" className="nav-link">Contato</Link>
            </li>
            <li>
              <Link to="/sobre-nos" className="nav-link">Sobre nós</Link>
            </li>
          </ul>
          <div className="compra-login">
            <Link to="/carrinho">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to="/login" className="botao-login">
              <i className="fa-solid fa-user"></i>Entrar
            </Link>
          </div>
        </div>
        <div className={`menu-icon-bar ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </header>

    </>
  );
}
