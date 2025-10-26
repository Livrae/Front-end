import React from 'react';

export default function Buscar({ frase = 'Buscar' }) {
  return (
    <div className="Busca-livro">
      <form onSubmit={(e) => e.preventDefault()}>
        <input className="buscar" placeholder={frase} />
        <button type="submit">🔎</button>
      </form>
    </div>
  );
}
