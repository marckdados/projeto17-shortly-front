import styled from "styled-components";
import ItemLink from "./ItemLink";

export default function ListLinks() {
  return (
    <ContainerListLinks>
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
      <ItemLink />
    </ContainerListLinks>
  );
}

const ContainerListLinks = styled.ul`
  width: 100%;
  max-height: 30vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  gap: calc(20px);
`;
