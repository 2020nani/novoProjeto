import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  background: linear-gradient(#FFA384, #74BDCB);
  @media (max-width:500px) {
    margin: 10px 0;  
  }
  img{
    margin-left: 5px;
    margin-top: 2px
    @media (max-width:500px) {
      margin: 0;
      width: 50px
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin: 0 10px 0 0;
  @media (max-width:500px) {
    flex-direction: column 
    svg{
      width: 30px
    }
  }
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    margin-left: 2px;
    @media (max-width:500px) {
      margin: 0; 
    }
    strong {
      display: block;
      color: #000;
      padding: 2px
      @media (max-width:500px) {
        font-size: 12px 
      }
    }
    span {
      font-size: 12px;
      color: black;
      padding: 2px;
      @media (max-width:500px) {
        font-size: 10px 
      }
    }
  }
`;

export const Button = styled.div `
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
button{
  background: none;
  border: none;
  color: black;
  font-size: 16px
  @media (max-width:500px) {
    font-size:10px  
  }
}
`