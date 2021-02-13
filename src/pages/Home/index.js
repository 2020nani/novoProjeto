import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { GamesList } from './styles'
import api from '../../services/api'



export default function Home() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    
    async function loadGames(){
    const response = await api.get('products.json')
    setJogos(response.data)
  }
  loadGames()
  }, []);
  return (console.log(jogos),
    <GamesList>
    {jogos.map(jogo => (
      <li key={jogo.id}>
         <img 
         src ={jogo.image}
         alt = {jogo.name}
         />
         <strong>{jogo.name}</strong>
         <span> R$ {jogo.price}</span>
         <span>SCORE: {jogo.score}</span>
         <button type="button">
           <div>
             <MdAddShoppingCart size={16} color="#FFF" />
           </div>
           <span>ADICIONAR AO CARRINHO</span>
         </button>
      </li>
    ))}  
    </GamesList>

  );
}