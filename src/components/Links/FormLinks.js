import styled from "styled-components";
import { buttonsColor, textButtonsColor } from "../../constants/colors";

function submitLink(e) {
  e.preventDefault();
  console.log(e);
}

export default function FormLinks() {
  return (
    <ContainerFormLinks onSubmit={submitLink}>
      <input placeholder="Links que cabem no bolso" type="url" />
      <button>Encurtar link</button>
    </ContainerFormLinks>
  );
}

const ContainerFormLinks = styled.form`
  width: 70%;
  height: 80px;
  display: flex;
  justify-content: center;
  gap: calc(10px);
  align-items: center;

  input {
    width: 40%;
    height: 80px;
    border: 1px solid #78b15940;
    border-radius: 12px;

    ::placeholder {
      margin-left: 20px;
    }
  }

  button {
    width: 10%;
    height: 50px;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    color: ${textButtonsColor};
    background-color: ${buttonsColor};
  }
`;
