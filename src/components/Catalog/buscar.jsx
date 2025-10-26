export default function Buscar({ frase }){
    return (
        <section className="Busca-livro">
            <form action="" method="get">
                <input type="text" name="busca" id="busca" placeholder={frase || "Busque um livro ou gênero..."} className="buscar"
                />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </section>  
    );
}