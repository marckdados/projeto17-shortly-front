import styled from "styled-components";
import FormLogin from "../components/Login/FormLogin";
import { fontMain } from "../constants/fontsText";

export default function LoginPage() {
  return (
    <ContainerLogin>
      <FormLogin />
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fontMain};
`;
