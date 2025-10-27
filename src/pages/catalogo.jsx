import Buscar from "../components/catalog/buscar";
import Card from "../components/catalog/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../assets/image/Banner/Banner1.png';
// Imagens
import Bioquimica from '../assets/image/Books/bioquimica.png';
import Anatomia from '../assets/image/Books/anatomia-humana.png';
import Around from '../assets/image/Books/around.png';
import Fisica from '../assets/image/Books/fisica.png'
import Hobbit from '../assets/image/Books/hobbit.png'
import Juridico from '../assets/image/Books/juridico.png'
import LifeOfPi from '../assets/image/Books/lifeOfPi.png'
import Musketers from '../assets/image/Books/musketers.png'
import Treasure from '../assets/image/Books/treasure.png'
import Vitruvius from '../assets/image/Books/vitruvius.png'

export default function Catalogo() {
  return (
    <>
      <main>
        <section
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Banner}
                className="d-block w-100"
                alt="Imagem 1"
              />
            </div>

            <div className="carousel-item" data-bs-interval="5000">
              <img
                src={Banner}
                className="d-block w-100"
                alt="Imagem 2"
              />
            </div>

            <div className="carousel-item" data-bs-interval="5000">
              <img
                src={Banner}
                className="d-block w-100"
                alt="Imagem 3"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </section>
        <section className="destaques">
          <Buscar frase="Digite um livro ou obra..."/>
          <h1>Acadêmicos</h1>
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
          <h1>Aventura</h1>
          <div className="articles-destaque">
            <Card
              img={Treasure}
              nome="A Ilha do Tesouro de Robert Louis Stevenson"
              valor="69,40"
              parcelado="ou 10x de R$6,99"
            />
            <Card
              img={LifeOfPi}
              nome="A Vida de Pi por Yann Martel"
              valor="58,50"
              parcelado="ou 10x de R$5,85"
            />
            <Card
              img={Hobbit}
              nome="O Hobbit de J. R. R. Tolkien"
              valor="91,60"
              parcelado="ou 10x de R$9,16"
            />
            <Card
              img={Around}
              nome="A Volta ao Mundo em Oitenta Dias de Júlio Verne"
              valor="71,40"
              parcelado="ou 10x de R$7,14"
            />
             <Card
              img={Musketers}
              nome="Os Três Mosqueteiros de Alexandre Dumas"
              valor="1105,10"
              parcelado="ou 10x de R$10,51"
            />
          </div>
        </section>
        {/* <section class="carregar-livros">
          <button>Carrergar mais</button>
        </section> */}
      </main>
    </>
  );
}
