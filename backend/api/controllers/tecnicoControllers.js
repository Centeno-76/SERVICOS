const models = require('../models/tecnicoModels.js');

module.exports = {
    tecnicosMenu,
    tecnicosGetAll,
    tecnicosGetById,    
    tecnicosNovo,
    tecnicosEditar,
}

function tecnicosMenu(req, res) {
    console.log('Listar tecnico {M O D E L}');
    models.getAllTecnicos(function (err, resposta) {
        console.log('Retorno de tecnico {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function tecnicosGetAll(req, res) {
    console.log('Listar tecnico {M O D E L}');
    models.getAllTecnicos(function (err, resposta) {
        console.log('Retorno de tecnico {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function tecnicosGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdTecnicos(id, function (err, resposta) {
        console.log('Retorno de tecnico Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 


function tecnicosNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de tecnico...");
    console.log(req.body);
    dados.tec_codigo = null;
    console.log("Inserindo novo registro de tecnico...");
    models.novoTecnicos(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/tecnicos');
    })
}


function tecnicosEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de tecnico...",dados);

    models.editarTecnicos(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/tecnicos');
    });
}


