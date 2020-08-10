import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';

import './index.css';

// Rotas inválidas.
const Pagina404 = () => (<h1> Rota inválida </h1>);

ReactDOM.render(

  <BrowserRouter>

    <Switch>
      {' '}
      {/* Possíveis entradas. */}
      <Route exact path="/" component={Home} />

      <Route component={Pagina404} />

    </Switch>

  </BrowserRouter>,

  document.getElementById('root'),

);
