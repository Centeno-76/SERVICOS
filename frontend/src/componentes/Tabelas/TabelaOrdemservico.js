import React from 'react';
import { Link } from 'react-router-dom';
import './Tabelas.css';

export default function TabelaOrdemservico(props) {
  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
     
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.ord_codigo}>
          <td> {item.ord_codigo} </td>
          <td> {item.ord_tipo} </td>
          <td> {item.ord_marca} </td>          
          <td> {item.ord_nroserie} </td>
          <td> {item.ord_defeito} </td>
          <td> {item.tec_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.ord_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.ord_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

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
            <th scope="col"> Tipo </th>
            <th scope="col"> Marca </th>            
            <th scope="col"> Número série </th>
            <th scope="col"> Defeito </th>
            <th scope="col"> Técnico </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Ordem de Serviço</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}