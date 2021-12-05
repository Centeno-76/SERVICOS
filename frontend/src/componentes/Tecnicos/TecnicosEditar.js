import React from "react"
import './TecnicosEditar.css';
import urlapi from "../../services/api.js"
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

export default function TecnicosEditar() {
    let idBoolean = false;         

    const [codigo, setCodigo] = useState(0);
    const [nome, setNome] = useState('');    
    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [contratado, setContratado] = useState('');
    const [dtnascimento, setDataNascimento] = useState('');

    const [checked, setChecked] = useState(false);
    

    const { idTecnico } = useParams();

    function IfCrud() {        
        console.log('Id Tecnico: ' + idTecnico + ' - ' + idBoolean)
        if (idTecnico === 0) {           
            idBoolean = true;
        } else {
          
        }
        
    }

    useEffect(() => {
        async function getTecnicos() {
            console.log('Tecnico: ' + idTecnico + ' - ' + idBoolean)
            if (idTecnico === 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                
                const { data } = await urlapi.get('/tecnicos/' + idTecnico);
                console.log(data)

                setCodigo(data[0].tec_codigo);
                setNome(data[0].tec_nome);
                setApelido(data[0].tec_apelido);
                setSexo(data[0].tec_contratado);
                setContratado(data[0].tec_contratado);
                setDataNascimento(data[0].tec_dtnascimento);                

                console.log(data[0].tec_nome)
              
            }
        }
        IfCrud();
        getTecnicos();
    }, [] );


  

    async function handleTecnicos(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.tec_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Tecnico: ",idTecnico)
                if (idTecnico === 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('tecnicos', data);
                } else {
                    console.log("Alteração de Registro! ",idTecnico)
                    await urlapi.put('/tecnicos/' + idTecnico, data);
                }
               
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--tecnico" onSubmit={handleTecnicos} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control" name="tec_codigo"
                                id= "tec_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>
                    

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Autor </label>
                            <input type="text" className="form-control " name="tec_nome"
                                id="tec_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="tec_apelido"
                                id="tec_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Sexo </label>
                            <input type="text" className="form-control" name="tec_sexo"
                                id="tec_sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Contratado </label>
                            <input type="text" className="form-control" name="tec_contratado"
                                id="tec_contratado"
                                value={contratado}
                                onChange={e => setContratado(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data de nascimento </label>
                            <input type="text" className="form-control" name="tec_dtnascimento"
                                id="tec_dtnascimento"
                                value={dtnascimento}
                                onChange={e => setDataNascimento(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/tecnicos" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
