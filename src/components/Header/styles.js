import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  background: gray
  img{
    margin-left: 5px;
    margin-top: 2px
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    margin-left: 2px;
    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: white;
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
  color: white;
  font-size: 16px
}
`