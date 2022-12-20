import styled from "styled-components";
import { backgroundItemColor, textButtonsColor } from "../../constants/colors";
import { HiTrash } from "react-icons/hi2";
export default function ItemLink() {
  return (
    <ContainerItemLink>
      <div>
        <span>https://www.driven.com.br</span>
        <span>e4231A</span>
        <span>Quantidade de visitantes: 271</span>
      </div>
      <button>
        <HiTrash color="#EA4F4F" size="2em" />
      </button>
    </ContainerItemLink>
  );
}

const ContainerItemLink = styled.li`
  width: 40%;
  min-height: 50px;
  display: flex;
  color: ${textButtonsColor};

  div {
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${backgroundItemColor};
    border-radius: 8px 0 0 8px;
  }

  button {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 8px 8px 0;
    border: 1px solid #78b1591f;
  }
`;
