import './css/App.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Catalogo from './pages/catalogo';
import Livro from './pages/livro';

import { Routes, Route } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/livro'  element={
          <Livro/>
        }/>
        <Route path="/sobre" element={
          <div>
            Página Sobre
          </div>
        } />

        <Route path="/contato" element={
          <div>
            Página Contato
          </div>
        } />

        <Route path="/catalogo" element={
          <div>
            <Catalogo/>
          </div>
        } />

        <Route path="/livro" element={
          <Livro/>
        } />

        <Route path="/planos" element={<div>Página Planos</div>} />

        <Route path="/faq" element={<div>Página FAQ</div>} />

        <Route path="/sobre-nos" element={<div>Página Sobre Nós</div>} />

        <Route path="/carrinho" element={<div>Página Carrinho</div>} />

        <Route path="/login" element={<div>Página Login</div>} />

        <Route path="/politica-privacidade" element={<div>Política de Privacidade</div>} />

        <Route path="/termos-uso" element={<div>Termos de Uso</div>} />

        <Route path="/politica-cookies" element={<div>Política de Cookies</div>} />

      </Routes>
      <Slider/>
      <Footer />
    </>
  );
}
