import styled from "styled-components";

export default function RankingList() {
  return (
    <ContainerRakingList>
      <span>1. Fulaninha - 32 links - 1.703.584 visualizações</span>
      <span>2. Ciclano - 20 links - 1.113.347 visualizações</span>
      <span>3. Beltrana - 18 links - 852.961 visualizações</span>
      <span>4. Joaozin - 14 links - 492.173 visualizações</span>
      <span>
        5. DEFINITIVAMENTE_NAO_E_UM_BOT - 12345252 links - 37.707 visualizações
      </span>
    </ContainerRakingList>
  );
}

const ContainerRakingList = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(10px);
`;
