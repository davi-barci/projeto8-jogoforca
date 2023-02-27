import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

  body {
        background-color: #FFFFFF;
  }
`

export const ContainerJogo = styled.div`
    width: 100%;
    height: 466.67px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    img{
      width: 400px;
      height: 466.67px;
      margin-left: 38px;
    }
`

export const ContainerPalavra = styled.div`
      height: 100%;
      margin-right: 53px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      button{
          width: 200px;
          height: 60px;
          background-color: #27AE60;
          border-style: none;
          border-radius: 8px;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 23px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          margin-top: 30px;
      }
`

export const PalavraJogo = styled.p`
      height: 68px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 68px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: center;
      color: ${props => (props.color === "palavra") ? "#000000" : (props.color === "acertou") ? `#27AE60` : `#FF0000`};
      margin-top: 282px;
`

export const ContainerLetras = styled.div`
    width: 100%;
    height: 91px;
    margin: 56px 0px;
    display: flex;
    justify-content: center;

    div{
      width: 664px;
      height: 91px;
      display: flex;
      flex-wrap: wrap;
    }

    button{
      width: 40px;
      height: 40px;
      background-color: #E1ECF4;
      border: 1px solid #7AA7C7;
      border-radius: 3px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #39739D;
      margin-right: 12px;
    }

    button:disabled {
      background-color: #9FAAB5;
      color: #798A9F;
    }

    button:nth-of-type(13n) {
      margin-right: 0px;
    }

    button:nth-of-type(n+14) {
      margin-top: 11px;
    }
`

export const ContainerChute = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      width: 144px;
      height: 100%;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      margin-right: 12px;
      color: #000000;
    }

    input{
      width: 353px;
      height: 100%;
      background: #FFFFFF;
      border: 1px solid #CCCCCC;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 20px;
      margin-right: 15px;
      box-sizing: border-box;
    }

    button{
      width: 100px;
      height: 100%;
      background: #E1ECF4;
      border: 1px solid #7AA7C7;
      border-radius: 3px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3C76A1;
    }
`

