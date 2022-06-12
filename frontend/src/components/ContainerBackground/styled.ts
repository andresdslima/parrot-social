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

export const CentralCard = styled.div`
  max-height: 100vh;
  background-color: #ffe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  font-family: "Questrial", sans-serif;
  padding: 36% 2%;
  box-sizing: border-box;
  border: 1px solid #c5c5c5;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 900px) {
    padding: 40% 2%;
  }
`;
