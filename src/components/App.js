import GlobalStyle from "../assets/css/globalStyles";
import styled from "styled-components"
import TelaInicial from "./TelaInicial";
import NavBar from "./NavBar";
import Horario from "./Horario";
import { useState } from "react";

export default function App() {
  const [filmeEscolhido, setFilmeEscolhido] = useState("")

  return (
    <div className="App">
      <GlobalStyle />

      <ContainerTela>
        <NavBar />
        {filmeEscolhido === "" ?
          <TelaInicial
            setFilmeEscolhido={setFilmeEscolhido}
          /> :
          <Horario
            filmeEscolhido={filmeEscolhido}
          />
        }
      </ContainerTela>
    </div>
  );
}

const ContainerTela = styled.div`
  max-width: 100vw;
  height: 100vh;
  padding-top: 67px;
  margin: 0 auto;
`