import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';
import palavras from '../palavras';
import { useState } from 'react';
import { GlobalStyle } from './Styles';

export default function App() {
      const [letrasHabilitadas, setLetrasHabilitadas] = useState(false);
      const [qtdErros, setQtdErros] = useState(0);
      const [resposta, setResposta] = useState("");
      const [palavra, setPalavra] = useState("");
      const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
      const [jogoEstadoAtual, setJogoEstadoAtual] = useState("");
      const [chuteResposta, setChuteResposta] = useState("");

      return (
            <>
                  <GlobalStyle />
                  <Jogo
                        setLetrasHabilitadas={setLetrasHabilitadas}
                        palavras={palavras}
                        setResposta={setResposta}
                        palavra={palavra}
                        setPalavra={setPalavra}
                        qtdErros={qtdErros}
                        setQtdErros={setQtdErros}
                        jogoEstadoAtual={jogoEstadoAtual}
                        setJogoEstadoAtual={setJogoEstadoAtual}
                        letrasEscolhidas={letrasEscolhidas}
                        setLetrasEscolhidas={setLetrasEscolhidas}
                        setChuteResposta={setChuteResposta}
                  />
                  <Letras
                        letrasHabilitadas={letrasHabilitadas}
                        setLetrasHabilitadas={setLetrasHabilitadas}
                        qtdErros={qtdErros}
                        setQtdErros={setQtdErros}
                        resposta={resposta}
                        palavra={palavra}
                        setPalavra={setPalavra}
                        letrasEscolhidas={letrasEscolhidas}
                        setLetrasEscolhidas={setLetrasEscolhidas}
                        setJogoEstadoAtual={setJogoEstadoAtual}
                  />

                  <Chute
                        chuteResposta={chuteResposta}
                        setChuteResposta={setChuteResposta}
                        resposta={resposta}
                        setJogoEstadoAtual={setJogoEstadoAtual}
                        letrasHabilitadas={letrasHabilitadas}
                        setLetrasHabilitadas={setLetrasHabilitadas}
                        setLetrasEscolhidas={setLetrasEscolhidas}
                        setPalavra={setPalavra}
                        setQtdErros={setQtdErros}
                  />
            </>
      );
}


