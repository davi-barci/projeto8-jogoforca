import Jogo from './Jogo';
import Letras from './Letras';
import palavras from '../palavras';
import "../styles/reset.css";
import "../styles/style.css";
import { useState } from 'react';

export default function App() {
  const [letrasHabilitadas, setLetrasHabilitadas] = useState(false);
  const [qtdErros, setQtdErros] = useState(0);
  const [resposta, setResposta] = useState("");
  const [palavra, setPalavra] = useState("");
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
  const [jogoEstadoAtual, setJogoEstadoAtual] = useState("");

  return (
    <>
    <Jogo 
          setLetrasHabilitadas={setLetrasHabilitadas} 
          palavras={palavras}
          setResposta = {setResposta}
          palavra = {palavra}
          setPalavra = {setPalavra}
          qtdErros = {qtdErros}
          setQtdErros = {setQtdErros}
          jogoEstadoAtual = {jogoEstadoAtual}
          setJogoEstadoAtual = {setJogoEstadoAtual}
          letrasEscolhidas = {letrasEscolhidas}
    />
    <Letras 
          letrasHabilitadas={letrasHabilitadas}
          setLetrasHabilitadas={setLetrasHabilitadas} 
          qtdErros = {qtdErros}
          setQtdErros = {setQtdErros}
          resposta = {resposta}
          palavra = {palavra}
          setPalavra = {setPalavra}
          letrasEscolhidas = {letrasEscolhidas}
          setLetrasEscolhidas = {setLetrasEscolhidas}
          setJogoEstadoAtual = {setJogoEstadoAtual}
    />
    </>
  );
}


