import React from "react"
import './Tecnicos.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaTecnicos";

import { useEffect, useState } from 'react';

function Tecnicos() {
  const [tecnicos, setTecnicos] = useState([]) 
  
  useEffect(() => {
    urlapi.get('tecnicos')
      .then(response => setTecnicos(response.data));
  }, []
  )

  return (
    <>
        <div id="idTecnicos" className="tecnicos">
          <div id="corpo_rel">
            <legend> Registros de Tecnicos Cadastrados</legend>            

            <div>

              <Tabela
                items={tecnicos}
                chave={'/tecnicos/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Tecnicos;

