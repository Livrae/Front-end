import { Link } from 'react-router-dom';

export default function Card(props){
    return(
        <>
        <article>
            <img src={props.img} alt="capa de livro"/>
            <span className="title">{props.nome}</span>
            <span className="valor">R$ {props.valor}</span>
            <span className="parcelado">{props.parcelado}</span>
          <Link
  to="/livro"
  className="adicionar"
  onClick={(e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = '/livro';
    }, 1000);
  }}
>
  Adicionar
</Link>

        </article>
        </>
    );
}