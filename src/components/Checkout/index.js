import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cartao from '../../assets/images/cartao.png';
import { reset } from '~/store/modules/carrinho/actions';
import ModalCheckOut from '../ModalCheckout/index'
import { Container, Compras, Pagamento } from './styles'
import { formataPreco } from '../../Util/format';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '../../services/history';


const schema = Yup.object().shape({
    cartao: Yup.string()
      .required('O numero do cartao é obrigatório'),
    nome: Yup.string().required('o nome é obrigatório'),
    cpf: Yup.string().required("Cpf e obrigatorio").min(11, 'CPF invalido').max(11, 'CPF invalido')
  });
  

export default function Checkout(props) {
    const dispatch = useDispatch()
    const [modalcheck, setModalCheck] = useState(false)
    const jogos = props.children[0]
    const freteFormatado = formataPreco(props.children[1])
    let total = ''
    if (props.children[2] < 250) {
        total = formataPreco(props.children[2] + props.children[1])
    } else {
        total = formataPreco(props.children[2])
    }

    function handleModal() {
        dispatch(reset())
        setModalCheck(true)
      
    }
   
    return (
       modalcheck == false ? 
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
                
                <Form schema={schema} >
        <Input name="cartao" type="text" placeholder="Numero do cartao" />
        <Input name="nome" type="text"  placeholder="Nome impresso no cartao" />
        <Input name="doc" type="text" placeholder="CPF titular" />
        <button type="button" onClick={() => handleModal()}>FINALIZAR COMPRA</button>
        
      </Form>
                
            </Pagamento>
        </Container>
      : <Redirect to = "/modalCheckOut"></Redirect>
    );
}


