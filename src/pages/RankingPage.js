import styled from "styled-components";
import { fontMain } from "../constants/fontsText";

export default function RakingPage() {
  return <ContainerRaking></ContainerRaking>;
}

const ContainerRaking = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${fontMain};
`;
