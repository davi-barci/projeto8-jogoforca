export default function Jogo(props) {

    function escolherPalavra(){
        const indexSorteado = Math.floor(Math.random() * props.palavras.length);
        console.log(props.palavras[indexSorteado]);
        props.setPalavra(props.palavras[indexSorteado]);
        props.setLetrasHabilitadas(true);
    }

    return (
        <div className="container-jogo">
            <img src="assets/img/forca0.png" className="imagem-forca"></img>

            <div className="container-palavra">
                <button onClick={escolherPalavra}>Escolher Palavra</button>
                <p>{"_ ".repeat(props.palavra.length)}</p>
            </div>
        </div>
    );
}