import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import history from './services/history';


export default function App() {
  return (
   
      <Router history={history}>
        <Header/>
        <Routes />
        <GlobalStyle />
      </Router>
    
  );
}
