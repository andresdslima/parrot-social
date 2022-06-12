import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

export const SInput = styled(Form.Control)`
  text-align: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const SButton = styled(Button)`
  width: 65%;
  border: none;
  border-radius: 10px;
  background-color: #76bb4c;
  padding: 7px 15px;
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  margin: 2vh 0;

  &:hover {
    background-color: #6033aa;
    color: #76bb4c;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    font-size: 15px;
    width: 45%;
  }
`;

export const Logo = styled.img`
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 25%;
  }

  @media only screen and (max-width: 450px) {
    width: 20%;
  }
`;
