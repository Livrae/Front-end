import React from 'react';
import { Link } from "react-router-dom";

export default function Card({ img, nome, valor, parcelado }) {
  return (
        <article>
            <Link to='/livro' state={{ img, nome, valor, parcelado }}>
                {img && <img src={img} alt={nome} />}
                <div className="title">{nome}</div>
                <div className="valor">R$ {valor}</div>
                <div className="parcelado">{parcelado}</div> 
            </Link>
            <a className="adicionar" href="#">Adicionar</a>
        </article>
   
  );
}
