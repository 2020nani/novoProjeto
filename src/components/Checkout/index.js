import React, { Children } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reset } from '~/store/modules/carrinho/actions';
import cartao from '../../assets/images/cartao.png';
import { Container, Compras, Pagamento } from './styles'
import { formataPreco } from '../../Util/format';

export default function Checkout(props) {
    const dispatch = useDispatch()
    const jogos = props.children[0]
    const freteFormatado = formataPreco(props.children[1])
    let total = ''
    if(props.children[2] < 250){
        total = formataPreco(props.children[2] + props.children[1])
    }else{
        total = formataPreco(props.children[2])
    }

    function finalizarCompra() {

        dispatch(reset())

    }

    return (

        <Container>
            <Compras>
                <h1>CHECKOUT</h1>
                {jogos.map(jogo => (
                    <li key={jogo.id}>
                        <img src={jogo.image} alt={jogo.name} />
                        <strong>QTD: {jogo.quantidade} JOGO: {jogo.name}</strong>
                    </li>
                ))}
                <span>FRETE</span>
                {props.children[2] < 250 ? 
                <strong>{freteFormatado}</strong>
                : <strong> 0.00 </strong>}
                <span>TOTAL</span>
                <strong>{total}</strong>

            </Compras>
            <Pagamento>
                <h1>PAGAMENTO</h1>
                <img src={cartao} alt="cartao credito" />
                <form onSubmit={finalizarCompra}>
                    <input placeholder="Numero do cartao"></input>
                    <input placeholder="Nome impresso no cartao"></input>
                    <input placeholder="CPF titular"></input>
                        <button type="submit" >FINALIZAR COMPRA</button>
                    
                </form>
            </Pagamento>
        </Container>
    );
}


