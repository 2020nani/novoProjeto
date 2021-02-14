import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart, Button } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { formataPreco } from '../../Util/format';
import { loadJogos } from '~/store/modules/jogos/actions';
import logo from '../../assets/images/logo.jpg'



function Header() {
const dispatch = useDispatch();
const carrinhoSize = useSelector(state => state.carrinho.length);
const games = useSelector(state => state.jogos)
useEffect(() => {

  loadGames()
}, []);
async function loadGames() {
  const response = await fetch('./products.json', {
    headers: {
      Accept: "application/json"
    }
  }).then(res => res.json())
  
  const data = response.map(data => ({
    ...data,
    precoFormatado: formataPreco(data.price)
  }))
  
  dispatch(loadJogos(data));
  
  
}

function ordenarAlfabeto(){
  let ordenarAlfabeto = games.jogos.slice().sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    // são idênticos
    return 0;
  })
  dispatch(loadJogos(ordenarAlfabeto));

}
function ordenarPreco(){
  let ordenarPreco = games.jogos.slice().sort(function(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    // são idênticos
    return 0;
  })
  dispatch(loadJogos(ordenarPreco));

}
function ordenarScore(){
  let ordenarScore = games.jogos.slice().sort(function(a, b) {
    if (b.score < a.score) {
      return -1;
    }
    if (b.score > a.score) {
      return 1;
    }
    // são idênticos
    return 0;
  })
  dispatch(loadJogos(ordenarScore));

}
  
  return (
    <Container>
      <Link to="/">
        <img width="150px" src= {logo} alt= "logo" />
      </Link>
      <Button>
      <button type="button" onClick={() => ordenarAlfabeto()}>Ordenar por Alfabeto</button>
      <button type="button" onClick={() => ordenarPreco()}>Ordenar por Preco</button>
      <button type="button" onClick={() => ordenarScore()}>Ordenar por Score</button>
      <button type="button" onClick={() => loadGames()}>Sem filtros </button>
      </Button>

      <Cart to="/carrinho">
        <div>
          <strong>Meu carrinho</strong>
          <span>{carrinhoSize} itens</span>
          
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}


export default Header;