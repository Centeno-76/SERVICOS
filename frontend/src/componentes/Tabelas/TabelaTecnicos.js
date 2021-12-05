import React from 'react';
import { Link } from 'react-router-dom';
import './Tabelas.css';

export default function Tabela(props) {
  
  
  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
     
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.tec_codigo}>
          <td> {item.tec_codigo} </td>
          <td> {item.tec_nome} </td>
          <td> {item.tec_apelido} </td>          
          <td> {item.tec_sexo} </td>
          <td> {item.tec_contratado} </td>
          <td> {item.tec_dtnascimento} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.tec_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.tec_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>            
            <th scope="col"> Sexo </th>
            <th scope="col"> contratado </th>
            <th scope="col"> Data Nascimento </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Tecnico</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}