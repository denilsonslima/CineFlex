import GlobalStyle from "./assets/css/globalStyles";
import styled from "styled-components"
import Header from "./components/Header";
import TelaInicial from "./components/TelaInicial";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ContainerTela>
        <Header/>
        <TelaInicial/>
      </ContainerTela>
    </div>
  );
}

const ContainerTela = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 67px;
`
