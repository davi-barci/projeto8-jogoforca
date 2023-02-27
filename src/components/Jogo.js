import forca0 from "../assets/img/forca0.png";
import forca1 from "../assets/img/forca1.png";
import forca2 from "../assets/img/forca2.png";
import forca3 from "../assets/img/forca3.png";
import forca4 from "../assets/img/forca4.png";
import forca5 from "../assets/img/forca5.png";
import forca6 from "../assets/img/forca6.png";
import { ContainerJogo } from "./Styles";
import { ContainerPalavra } from "./Styles";
import { PalavraJogo } from "./Styles";

export default function Jogo(props) {

    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function escolherPalavra(){
        const indexSorteado = Math.floor(Math.random() * props.palavras.length);
        props.setJogoEstadoAtual("");
        props.setQtdErros(0);
        props.setChuteResposta("");
        props.setResposta(props.palavras[indexSorteado]);
        console.log(props.palavras[indexSorteado]);
        props.setPalavra("_ ".repeat(props.palavras[indexSorteado].length));
        props.setLetrasHabilitadas(true);
        props.setLetrasEscolhidas([...[]]);
    }

    return (
        <ContainerJogo>
            <img data-test="game-image" src={imagens[props.qtdErros]} alt="imagem_forca"></img>

            <ContainerPalavra>
                <button data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</button>
                <PalavraJogo data-test="word" color={(props.jogoEstadoAtual === "ganhou") ? "acertou" :
                ((props.jogoEstadoAtual === "perdeu") ? "errou" : "palavra")}>
                    {props.palavra}
                </PalavraJogo>
            </ContainerPalavra>
        </ContainerJogo>
    );
}