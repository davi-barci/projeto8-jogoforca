import Jogo from './Jogo';
import Letras from './Letras';
import palavras from '../palavras';
import "../styles/reset.css";
import "../styles/style.css";
import { useState } from 'react';

export default function App() {
  const [letrasHabilitadas, setLetrasHabilitadas] = useState(false);
  const [qtdErros, setQtdErros] = useState(0);
  const [palavra, setPalavra] = useState("");

  return (
    <>
    <Jogo 
          setLetrasHabilitadas={setLetrasHabilitadas} 
          palavras={palavras}
          palavra = {palavra}
          setPalavra = {setPalavra}
    />
    <Letras letrasHabilitadas={letrasHabilitadas}/>
    </>
  );
}


