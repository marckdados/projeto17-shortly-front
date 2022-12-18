import styled from "styled-components";
import {
  topBackGroundColor,
  topLoginColor,
  topSignUpColor,
} from "../../constants/colors";
import { fontMain } from "../../constants/fontsText";
export default function Top() {
  console.log(topSignUpColor, topLoginColor);
  return (
    <ContainerTop>
      <span cor="#fffff">Entrar</span>
      <span cor={topSignUpColor}>Cadastrar</span>
    </ContainerTop>
  );
}

const ContainerTop = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  gap: calc(5%);
  justify-content: flex-end;
  align-items: center;
  background-color: ${topBackGroundColor};
  font-family: ${fontMain};
`;
