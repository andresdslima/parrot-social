import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Nav = styled.nav`
   display: flex;

   h3{
       color: #76BB4C;
       font-weight: 400;
       font-size: 24px;
       margin-top: 4px;
       padding-right: 15px;


       @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
   }


   
   ul{
    list-style-type: none;
    overflow: hidden;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
   }
   li{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
   }
   a{display: block;
    padding: 0 15px;
    color: #6033AA;
    text-decoration: none;
    font-size: 16px;
    font-family: Questrial;
    line-height: 40px;
    text-align: center;

    @media only screen and (max-width: 900px) {
    font-size: 12px;
   }
}
`

export const Img = styled.img`
    @media only screen and (max-width: 900px) {
    width: 80%;}
`