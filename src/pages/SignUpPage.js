import styled from "styled-components";
import FormSignUp from "../components/SignUp/FormSignUp";
import { fontMain } from "../constants/fontsText";

export default function SignUpPage() {
  return (
    <ContainerSignUp>
      <FormSignUp />
    </ContainerSignUp>
  );
}

const ContainerSignUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fontMain};
`;
