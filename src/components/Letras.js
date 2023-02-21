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
            props.setPalavra(palavra.join(" "));
        }else{
            props.setQtdErros(props.qtdErros + 1);
        }
        props.setLetrasEscolhidas([...props.letrasEscolhidas, letra]);
    }

    return (
        <div className="container-letras">
            {alfabeto.map((elem) => 
            <button onClick={() => escolherLetra(elem)} disabled={(props.letrasHabilitadas && !props.letrasEscolhidas.includes(elem)) ? false : true}>
                {elem.toUpperCase()}
            </button>
            )}
        </div>
    );
}