const controller = require('../controllers/tecnicoControllers.js');


server.get('/tecnicos', controller.tecnicosMenu)
server.get('/tecnicos', controller.tecnicosGetAll)
server.get('/tecnicos/:codigo', controller.tecnicosGetById)
server.put('/tecnicos/:codigo', controller.tecnicosEditar)
server.post('/tecnicos', controller.tecnicosNovo)

