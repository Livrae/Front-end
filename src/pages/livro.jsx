import './../css/livro.css'
import Bioquimica from '../assets/image/Books/bioquimica.png'
import Anatomia from '../assets/image/Books/anatomia-humana.png'
import Fisica from '../assets/image/Books/fisica.png'
import Juridico from '../assets/image/Books/juridico.png'
import Vitruvius from '../assets/image/Books/vitruvius.png'
import Card from '../components/catalog/card'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Livro() {
    const location = useLocation()
    const { img, nome, valor, parcelado } = location.state || {}
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <>
            <section className="Ver-livro">
                <div className="imagem-livro">
                    <div className="preview"><img src={img} alt={nome} /></div>
                    <img src={img} alt={nome} className='preview-total' />
                </div>
                <div className="informacoes-livro">
                    <div className="cabecario-livro">
                        <h1>{nome}</h1>
                        <div>
                            <i className="fa-solid fa-share"></i>
                            <i 
                                className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart`}
                                onClick={toggleFavorite}
                                style={{ cursor: 'pointer' }}
                            ></i>
                        </div>
                    </div>
                    <div className="editora-Autor">
                        <span className="editora">Editora: <a href="#">Nome editora</a></span>
                        <span className="autor">Autor: <a href="#">Nome Autor</a></span>
                    </div>
                    {/* AVALIAÇÃO */}
                    <div className="avaliacao">
                        <span className="pontuacao">0.0</span>
                        <div className="stars">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span className="total-Avaaliacao">0 Avaliação</span>
                    </div>
                    <div className="descricao">
                        Um livro que explora os quatro "Elementos" fundamentais da boa cozinha - Sal, gordura, ácido e calor - ensinando como compreender e dominar cada um para melhorar o sabor dos pratos
                    </div>
                    <div className="valores">
                        <div className="valor">
                            <p>R$ {valor}</p>
                        </div>
                        <div className="parcelado">
                            <p>{parcelado}</p>
                        </div>
                    </div>
                    <div className="quantidade-livro">
                        <div className="menos"><i class="fa-solid fa-window-minimize"></i></div>
                        <div className="quantidade">0</div>
                        <div className="mais"><i class="fa-solid fa-plus"></i></div>Quantidade
                    </div>
                    <button className="Adiciona-carrinho">Adicionar no carrinho</button>
                </div>
            </section>
            <section className="destaques">
                <h1>Obras relacionadas</h1>
                <div className="articles-destaque">
                    <Card
                        img={Bioquimica}
                        nome="Principios da Bioquímica de Lehninger"
                        valor="498,91"
                        parcelado="ou 10x de R$49,91"
                    />
                    <Card
                        img={Anatomia}
                        nome="Netter Atlas De Anatomia Humana"
                        valor="611,90"
                        parcelado="ou 10x de R$61,19"
                    />
                    <Card
                        img={Juridico}
                        nome="Norberto Bobbio – Teoria do Ordenamento Jurídico"
                        valor="59,90"
                        parcelado="ou 10x de R$5,99"
                    />
                    <Card
                        img={Vitruvius}
                        nome="Vitruvius – Os Dez Livros de Arquitetura"
                        valor="228,98"
                        parcelado="ou 10x de R$22,90"
                    />
                    <Card
                        img={Fisica}
                        nome="Física de Sears & Zemansky"
                        valor="216,80"
                        parcelado="ou 10x de R$21,70"
                    />
                </div>
            </section>
        </>
    );
}
