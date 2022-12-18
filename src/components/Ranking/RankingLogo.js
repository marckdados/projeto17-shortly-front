import styled from "styled-components";
import rankingLogo from "../../assets/images/ranking_logo.svg";

export default function RankingLogo() {
  return (
    <ContainerLogoRanking>
      <img src={rankingLogo} alt="Logo Ranking" />
      <span>Ranking</span>
    </ContainerLogoRanking>
  );
}

const ContainerLogoRanking = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 700;
  img {
    width: 5%;
  }
`;
