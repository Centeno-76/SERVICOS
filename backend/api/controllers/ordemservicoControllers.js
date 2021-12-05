const models = require('../models/ordemservicoModels.js');

module.exports = {
    ordemservicoMenu,
    ordemservicoGetAll,
    ordemservicoGetById,
    ordemservicoNovo,
    ordemservicoEditar      
}

function ordemservicoMenu(req, res) {
    console.log('Listar tecnico {M O D E L}');
    models.getAllordemservico(function (err, resposta) {
        console.log('Retorno de tecnico {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function ordemservicoGetAll(req, res) {
    console.log('Listar ordem servico {M O D E L}');
    models.getAllordemservico(function(err, resposta) {
        console.log('Retorno de ordem servico {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })  
}


function ordemservicoGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdordemservico(id, function(err, resposta) {
        console.log('Retorno de ordemservico Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function ordemservicoNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Nova Ordem se Serviço...");
    console.log(req.body);
    dados.tec_codigo = null;
    console.log("Inserindo nova ordem de serviço...");
    models.novoOrdemservico(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/ordemservico');
    })
}


function ordemservicoEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Ordem de Serviço...",dados);

    models.editarOrdemservico(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/ordemservico');
    });
}

