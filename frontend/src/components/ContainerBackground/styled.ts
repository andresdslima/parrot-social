import styled from "styled-components";
import background from "../../assets/background.png";

export const ContainerBackground = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background: #000 url(${background}) no-repeat top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 5% 0;
`;
