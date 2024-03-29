import styled from "styled-components";

export const GamesList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
list-style: none;
@media (max-width:750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width:500px) {
    grid-template-columns: repeat(1, 1fr);
  }
li {
    display: flex;
    flex-direction: column;
    background: none;
    border-radius: 4px;
    padding: 20px;
}
img {
    align-self: center;
    max-width: 250px
}
> strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px
}
> span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
}
button {
    background: skyblue;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;

    &:hover {
        background: yellow
    }
    div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
    }
    svg{
        margin-right: 5px
    }
    span {
        flex: 1;
        text-align: center;
        font-weight: bold
    }
    
}

`