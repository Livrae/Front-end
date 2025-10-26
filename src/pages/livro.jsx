export default function Livro(props){
    return(
        <>
            <section className="Ver-livro">
                <div className="imagem-livro">
                   
                </div>
                <div className="informacoes-livro">
                    <div className="cabecario-livro">
                        <h1>Nome do livro</h1>
                        <i className="fa-solid fa-share"></i>
                        <i className="fa-regular fa-heart"></i> 
                        {/* <i className="fa-solid fa-heart"></i> */}
                    </div>
                </div>
            </section>
        </>
    );
}
