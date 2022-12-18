import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { fontMain } from "../../constants/fontsText";
export default function Logo() {
  return (
    <ContainerLogo>
      <span>Shortly</span>
      <img src={logo} alt="Logo Shortly" />
    </ContainerLogo>
  );
}

const ContainerLogo = styled.div`
  width: 40%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fontMain};
  font-size: 3em;
  font-weight: 200;

  img {
    width: 10%;
  }
`;
