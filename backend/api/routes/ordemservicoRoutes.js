const controller = require('../controllers/ordemservicoControllers.js');

server.get('/ordemservico', controller.ordemservicoMenu)
server.get('/ordemservico/listar', controller.ordemservicoGetAll)
server.get('/ordemservico/consultar/:codigo', controller.ordemservicoGetById)
server.put('/ordemservico/:codigo', controller.ordemservicoEditar)
server.post('/ordemservico', controller.ordemservicoNovo)



