const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');

route.get('/', (req, res) => {
  res.send(`Hi!`);
});

route.get('/cadastro', homeController.cadastro);
route.post('/registro/:idRegistro', homeController.showRegistro);

module.exports = route;
