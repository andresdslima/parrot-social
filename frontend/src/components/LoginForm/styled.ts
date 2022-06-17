import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;

  small {
    color: #f00;
    padding: 0;
    margin: 0;
    font-weight: 700;
  }
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
  margin: 0;

  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const SButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: #76bb4c;
  padding: 7px 20px;
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
    padding: 3px 15px;
  }
`;

export const Logo = styled.img`
  width: 70%;

  @media only screen and (max-width: 900px) {
    width: 50%;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #0075ff;
  }

  @media only screen and (max-width: 450px) {
    font-size: 13px;
  }
`;

export const CentralCard = styled.div`
  max-height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  font-family: "Questrial", sans-serif;
  padding: 20% 7.5%;
  box-sizing: border-box;
  border: 1px solid #c5c5c5;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 900px) {
    padding: 20% 10%;
  }
`;
