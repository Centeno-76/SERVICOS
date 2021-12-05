const conexao = require('../../config/conexao.js');

module.exports = {
    getAllTecnicos,
    getByIdTecnicos,    
    editarTecnicos,
    novoTecnicos           
}

function getAllTecnicos(callback) {
    conexao.query('select * from tecnico', callback)
}

function getByIdTecnicos(id, callback) {
    conexao.query('select * from tecnico WHERE tec_codigo = ' + id, callback)
}


function novoTecnicos(id, callback) {
    var msql = 'INSERT INTO tecnico SET ? ';

	conexao.query(msql, id, callback);
}

function editarTecnicos(id, callback) {
    console.log('Estou alterando os tecnicos { M O D E L } .......' + id);

    var msql = "UPDATE tecnico SET tec_nome = '" + id.tec_nome +        
    "' , tec_apelido      = '" + id.tec_apelido + 
    "' , tec_sexo         = '" + id.tec_sexo + 
    "' , tec_contratado     = '" + id.tec_contratado + 
    "' , tec_dtnascimento        = '" + id.tec_nascimento + 
    "'  WHERE tec_codigo  = '" + id.tec_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

