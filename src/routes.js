const express = require('express');
const routes = express.Router();
const userController = require('./controller/userController');


routes.post('/user',userController.addUser);
routes.get('/user',userController.getUsers);


module.exports = routes;