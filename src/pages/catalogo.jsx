import Buscar from "../components/catalog/buscar";
import Card from "../components/catalog/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../assets/image/Banner/Banner1.png'
import capaLivro from "../assets/image/Books/Livro.png";

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
          <h1>Destaques</h1>
          <div className="articles-destaque">
            <Card
              img={capaLivro}
              nome="Principios da Bioquímica de Lehninger"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Netter Atlas De Anatomia Humana"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Norberto Bobbio – Teoria do Ordenamento Jurídico"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Vitruvius – Os Dez Livros de Arquitetura"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Física de Sears & Zemansky"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Principios da Bioquímica de Lehninger"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Principios da Bioquímica de Lehninger"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Principios da Bioquímica de Lehninger"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Principios da Bioquímica de Lehninger"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
            />
            <Card
              img={capaLivro}
              nome="Principios da Bioquímica de Lehninger"
              valor="75,00"
              parcelado="ou 10x de R$7,50"
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
