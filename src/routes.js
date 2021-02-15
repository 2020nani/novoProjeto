import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import modalCheckOut from './components/ModalCheckout/index'
export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/modalCheckOut" component={modalCheckOut} />
    </Switch>
  );
}