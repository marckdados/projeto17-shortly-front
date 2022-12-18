import styled from "styled-components";
import RankingList from "../components/Ranking/RankingList";
import RankingLogo from "../components/Ranking/RankingLogo";
import { fontMain } from "../constants/fontsText";

export default function RakingPage() {
  return (
    <ContainerRaking>
      <RankingLogo />
      <RankingList />
      <p>Crie sua conta para usar nosso serviço!</p>
    </ContainerRaking>
  );
}

const ContainerRaking = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${fontMain};
  margin-top: 2%;
  gap: calc(100px);

  p {
    font-size: 2em;
    font-weight: 700;
  }
`;
