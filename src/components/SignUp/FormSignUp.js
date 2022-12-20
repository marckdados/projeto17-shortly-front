import styled from "styled-components";
import { buttonsColor, textButtonsColor } from "../../constants/colors";

export default function FormSignUp() {
  return (
    <ContainerForm>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Confirme sua senha" />
      <button>Criar conta</button>
    </ContainerForm>
  );
}

const ContainerForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  gap: calc(20px);

  input {
    width: 100%;
    height: 50px;
    border-radius: 12px;
    border: 1px solid #78b15940;
  }

  button {
    width: 20%;
    height: 50px;
    background-color: ${buttonsColor};
    border: none;
    border-radius: 12px;
    color: ${textButtonsColor};
    font-weight: 700;
  }
`;
