const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
  * Tipos parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após  "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  routes.post('/sessions', SessionController.create);

  routes.get('/ongs', OngController.index);
  routes.post('/ongs', OngController.create);

  routes.get('/profile', ProfileController.index);
  
  routes.get('/incidents', IncidentController.index);
  routes.post('/incidents', IncidentController.create);
  routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; /*Exportando o código de routes.js para ser acessado por outro arquivo */