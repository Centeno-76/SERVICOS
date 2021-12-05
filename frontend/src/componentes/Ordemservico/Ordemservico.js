import React from "react"
import './Ordemservico.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaOrdemservico";
import { useEffect, useState } from 'react';


function Ordemservico() {
  const [ordemservico, setOrdemservico] = useState([]) 
  
  useEffect(() => {
    urlapi.get('ordemservico')
      .then(response => setOrdemservico(response.data));
  }, []
  )

  return (
    <>
        <div id="idOrdemservico" className="ordemservico">
          <div id="corpo_rel">
            <legend> Registros de Ordens de Serviços cadastradas</legend>            

            <div>

              <Tabela
                items={ordemservico}
                chave={'/ordemservico/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Ordemservico;



