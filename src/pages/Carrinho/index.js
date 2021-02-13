import React from 'react';
import { Container, TabelaJogo, Total} from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

export default function Carrinho() {

  return (
<Container>
  <TabelaJogo>
     <thead>
       <tr>
         <th />
         <th>JOGO</th>
         <th>QTD</th>
         <th>SUBTOTAL</th>
         <th />
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>
           <img src="" alt="jogo" />
         </td>
         <td>
           <strong>Jogo legal</strong>
           <span>R$100</span>
         </td>
         <td>
           <div>
           <button type="button">
             <MdRemoveCircleOutline size={20} color="0000" />
           </button>
          <input type="number" readOnly value={1} />
           <button type="button">
             <MdAddCircleOutline size={20} color="0000" />
           </button>
           </div>
         </td>
         <td>
           <strong>R$ 200</strong>
         </td>
         <td>
         <button type="button">
             <MdDelete size={20} color="0000" />
           </button>
         </td>
       </tr>
     </tbody>
  </TabelaJogo>
  <footer>
    <button type="button"> Finalizar Pedido</button>

    <Total>
      <span>TOTAL</span>
      <strong>R$ 1900</strong>
    </Total>
  </footer>
</Container>

  );
}