import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Tecnicos from '../Tecnicos/Tecnicos';
import TecnicosEditar from '../Tecnicos/TecnicosEditar';
import Ordemservico from '../Ordemservico/Ordemservico';
import OrdemservicoEditar from '../Ordemservico/Ordemservico';


import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <>
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/tecnicos" component={Tecnicos}></Route>
        <Route exact path="/tecnicos/:id" component={TecnicosEditar}></Route>
        <Route exact path="/ordemservico" component={Ordemservico}></Route>
        <Route exact path="/ordemservico/:id" component={OrdemservicoEditar}></Route>
      
      
      </Switch>

      

    </div>
    </>
  );
}

