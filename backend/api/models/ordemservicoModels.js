const conexao = require('../../config/conexao.js');

module.exports = {
    getAllordemservico,
    getByIdordemservico,
    novoOrdemservico,    
    editarOrdemservico    
}

function getAllordemservico (callback) {
   
    conexao.query('select * from ordemservico', callback)    
}

function getByIdordemservico (id, callback) {
    conexao.query('select * from ordemservico WHERE ord_codigo = ' + id, callback)
}

function novoOrdemservico(id, callback){
    var msql = 'INSERT INTO ordemservico SET ? '; 
    conexao.query(msql, id, callback)
}

function editarOrdemservico(id, callback){
    console.log('Estou alterando ordemservico { M O D E L } ........' + id);
    var msql = "UPDATE ordemservico SET ord_tipo = '" + id.ord_tipo +
    "' , ord_marca = '" + id.ord_marca +
    "' , ord_nroserie = '" + id.ord_nroserie +
    "' , ord_defeito = '" + id.ord_defeito +
    "' WHERE ord_codigo = '" + id.ord_codigo + "'";
    
    console.log(msql);
    conexao.query(msql, callback);
}





