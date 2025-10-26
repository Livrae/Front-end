import logoBranca from '../../assets/icon/logoBranca.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="f_inform">
                <div className="f_totens">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre-nos">Sobre Nós</Link></li>
                        <li><Link to="/planos">Planos</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/catalogo">Catálogo</Link></li>
                        <li><Link to="/contato">Contatos</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>

                    <div className="m_digitais">
                        <div className="m_logo">
                            <img src={logoBranca} alt="logo" />
                        </div>
                        <div className="m_sociais">
                            <a href="https://github.com/Livrae" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="f_termos">
                    <div className="c_coo">
                        <span>© 2025 Livraê. Todos os direitos reservados.</span>
                    </div>
                    <div className="b_burocrat">
                        <ul>
                            <li><Link to="/politica-privacidade">Política de Privacidade</Link></li>
                            <li><Link to="/termos-uso">Termos de Uso</Link></li>
                            <li><Link to="/politica-cookies">Política de Cookies</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}   
