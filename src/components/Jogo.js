import forca0 from "../assets/img/forca0.png";
import forca1 from "../assets/img/forca1.png";
import forca2 from "../assets/img/forca2.png";
import forca3 from "../assets/img/forca3.png";
import forca4 from "../assets/img/forca4.png";
import forca5 from "../assets/img/forca5.png";
import forca6 from "../assets/img/forca6.png";

export default function Jogo(props) {

    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function escolherPalavra(){
        const indexSorteado = Math.floor(Math.random() * props.palavras.length);
        props.setJogoEstadoAtual("");
        props.setQtdErros(0);
        props.setResposta(props.palavras[indexSorteado]);
        props.setPalavra("_ ".repeat(props.palavras[indexSorteado].length));
        props.setLetrasHabilitadas(true);
    }

    return (
        <div className="container-jogo">
            <img src={imagens[props.qtdErros]} alt="imagem_forca" className="imagem-forca"></img>

            <div className="container-palavra">
                <button onClick={escolherPalavra}>Escolher Palavra</button>
                <p className={(props.jogoEstadoAtual == "ganhou") ? ("palavra-jogo acertou-palavra") : ((props.jogoEstadoAtual == "perdeu") ? ("palavra-jogo errou-palavra") : ("palavra-jogo"))}>
                    {props.palavra}
                </p>
            </div>
        </div>
    );
}