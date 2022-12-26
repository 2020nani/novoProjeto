import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { GamesList } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { carrinhoRequest } from '~/store/modules/carrinho/actions';


export default function Home() {
  const dispatch = useDispatch()
  const quantiajogo = useSelector(state =>
    state.carrinho.reduce((somaquantia, game) => {
      somaquantia[game.id] = game.quantidade;
      return somaquantia;
    }, {})
  );
 
  const games = useSelector(state => state.jogos)


  function addCarrinho(jogo){
    dispatch(carrinhoRequest(jogo));
  }
  

  return (
    <GamesList>
      {games.jogos.map(jogo => (
        <li key={jogo.id}>
          <img width="300px" height="300px" object-fit="contain"  src={jogo.image} alt={jogo.name}/>
          <strong>{jogo.name}</strong>
          <span> {jogo.precoFormatado}</span>
          <span>SCORE: {jogo.score}</span>
          <button type="button" onClick={() => addCarrinho(jogo)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 
              {quantiajogo[jogo.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
     
    </GamesList>

  );
}