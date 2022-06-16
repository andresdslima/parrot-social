import styled from 'styled-components';


export const Container = styled.div`

  width: 80vw;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: row;
  display: flex;
  padding: 10px;
  justify-content: center;
  border: 1px solid #e6e6e6;


  @media only screen and (max-width: 768px) {

    width: 85vh;
  }


  img{
    width: 70px;
    height: 70px;
    margin-top: 20px;
    margin-right: 10px;
  }
`
export const FormFeed = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;

    textarea{
    margin-bottom: 26px;
    width: 80vh;
    height: 105px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #8BC34A;
    border-radius: 7px;
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 700;
    padding: 15px;

    @media only screen and (max-width: 800px) {
    width: 60vh;
  }

  @media only screen and (max-width: 500px) {
    width: 25vh;
  }

}
`
export const ButtonFeed = styled.button`
  background-color: #6033AA;
  font-family: 'Questrial';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
  padding: 5px 35px;
  border-radius: 15px;
  border-color: #6033AA;
  color: #FFFFFF;
`