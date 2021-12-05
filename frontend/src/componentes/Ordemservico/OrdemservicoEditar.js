import React from "react"
import './OrdemservicoEditar.css';
import urlapi from "../../services/api.js"
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

export default function OrdemservicoEditar() {
    let idBoolean = false;         

    const [codigo, setCodigo] = useState(0);
    const [tipo, setTipo] = useState('');    
    const [marca, setMarca] = useState('');
    const [nroserie, setNroserie] = useState('');
    const [defeito, setDefeito] = useState('');
    const [cod, setCod] = useState('');

    const [checked, setChecked] = useState(false);
    

    const { idOrdemservico } = useParams();

    function IfCrud() {        
        console.log('Id Ordem Serviço: ' + idOrdemservico + ' - ' + idBoolean)
        if (idOrdemservico === 0) {           
            idBoolean = true;
        } else {
          
        }
        
    }

    useEffect(() => {
        async function getOrdemservico() {
            console.log('Ordem de serviço: ' + idOrdemservico + ' - ' + idBoolean)
            if (idOrdemservico == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                
                const { data } = await urlapi.get('/ordemservico/' + idOrdemservico);
                console.log(data)

                setCodigo(data[0].ord_codigo);
                setTipo(data[0].ord_tipo);
                setMarca(data[0]._ord_marca);
                setNroserie(data[0].ord_nroserie);
                setDefeito(data[0].ord_defeito);
                setCod(data[0].tec_codigo);                

                console.log(data[0].ord_tipo)
              
            }
        }
        IfCrud();
        getOrdemservico();
    }, []);


  

    async function handleOrdemservico(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.ord_tipo);

        try {
            if (tipo.length === 0) {
                alert('Insira um codigo válido')
            } else {
                console.log("Codigo Ordem Serviço: ",idOrdemservico)
                if (idOrdemservico == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('ordemservico', data);
                } else {
                    console.log("Alteração de Registro! ",idOrdemservico)
                    await urlapi.put('/ordemservico/' + idOrdemservico, data);
                }
               
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleOrdemservico} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control" name="ord_codigo"
                                id= "ord_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>
                    

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Tipo de ordem de serviço </label>
                            <input type="text" className="form-control " name="ord_tipo"
                                id="ord_tipo"
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Marca </label>
                            <input type="text" className="form-control" name="ord_marca"
                                id="ord_marca"
                                value={marca}
                                onChange={e => setMarca(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Número de série </label>
                            <input type="text" className="form-control" name="ord_nroserie"
                                id="ord_nroserie"
                                value={nroserie}
                                onChange={e => setNroserie(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Defeito </label>
                            <input type="text" className="form-control" name="ord_defeito"
                                id="ord_defeito"
                                value={defeito}
                                onChange={e => setDefeito(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Codigo do Tecnico </label>
                            <input type="text" className="form-control" name="tec_cod"
                                id="tec_cod"
                                value={cod}
                                onChange={e => setCod(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/ordemservico" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
