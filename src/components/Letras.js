export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function escolherLetra(letra){
        const resposta = props.resposta.split('');
        const palavra = props.palavra.split(" ");
        if (resposta.includes(letra)){
            resposta.forEach((elem, index) => {
                if (elem === letra){
                    palavra[index] = letra;
                }
            });
            if (!palavra.includes("_")){
                props.setJogoEstadoAtual("ganhou");
                props.setLetrasHabilitadas(false);
                props.setLetrasEscolhidas([...[]]);
                props.setPalavra(palavra.join(""));
                return;
            }else{
                props.setPalavra(palavra.join(" "));
            }
        }else{
            props.setQtdErros(props.qtdErros + 1);
            if (props.qtdErros+1 == 6){
                props.setJogoEstadoAtual("perdeu");
                props.setLetrasHabilitadas(false);
                props.setLetrasEscolhidas([...[]]);
                props.setPalavra(resposta.join(""));
                return;
            }
        }
        props.setLetrasEscolhidas([...props.letrasEscolhidas, letra]);
    }

    return (
        <div className="container-letras">
            {alfabeto.map((elem, index) => 
            <button key={index} data-test="letter" onClick={() => escolherLetra(elem)} disabled={(props.letrasHabilitadas && !props.letrasEscolhidas.includes(elem)) ? false : true}>
                {elem.toUpperCase()}
            </button>
            )}
        </div>
    );
}