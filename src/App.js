import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top/Top";
import GlobalStyle from "./assets/style/globalStyle";
import Logo from "./components/Logo/Logo";
import RakingPage from "./pages/RankingPage";
import LinksPage from "./pages/LinksPage";
const logged = true;
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Top />
        <Logo />
        <Routes>
          {logged ? (
            <Route path="/" element={<LinksPage />} />
          ) : (
            <Route path="/" element={<RakingPage />} />
          )}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
export default App;
