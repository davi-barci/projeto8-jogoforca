import { ContainerChute } from './Styles';

export default function Chute(props) {

    function conferirChute(){
        if (props.chuteResposta.trim() !== ""){
            if (props.chuteResposta.trim() === props.resposta){
                props.setJogoEstadoAtual("ganhou");
                props.setLetrasHabilitadas(false);
                props.setLetrasEscolhidas([...[]]);
                props.setPalavra(props.chuteResposta.trim());
            }else{
                props.setJogoEstadoAtual("perdeu");
                props.setLetrasHabilitadas(false);
                props.setLetrasEscolhidas([...[]]);
                const qtdMaximaErros = 6;
                props.setQtdErros(qtdMaximaErros);
                props.setPalavra(props.resposta);
            }
        }
    }

    return(
        <ContainerChute>
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={(props.letrasHabilitadas) ? false : true} value={props.chuteResposta}
            onChange={e => props.setChuteResposta(e.target.value)}></input>
            <button data-test="guess-button" onClick={conferirChute}>Chutar</button>
        </ContainerChute>
    );
}