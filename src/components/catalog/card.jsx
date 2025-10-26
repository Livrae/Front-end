import React from 'react';

export default function Card({ img, nome, valor, parcelado }) {
  return (
    <article>
      {img && <img src={img} alt={nome} />}
      <div className="title">{nome}</div>
      <div className="valor">R$ {valor}</div>
      <div className="parcelado">{parcelado}</div>
      <a className="adicionar" href="#">Adicionar</a>
    </article>
  );
}
