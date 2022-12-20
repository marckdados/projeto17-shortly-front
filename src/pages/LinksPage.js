import styled from "styled-components";
import FormLinks from "../components/Links/FormLinks";
import ListLinks from "../components/Links/ListLinks";
import { fontMain } from "../constants/fontsText";

export default function LinksPage() {
  return (
    <ContainerLinks>
      <FormLinks />
      <ListLinks />
    </ContainerLinks>
  );
}

const ContainerLinks = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(20px);
  font-family: ${fontMain};
`;
