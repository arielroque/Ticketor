const express = require('express');
const routes = express.Router();
const userController = require('./controller/userController');
const ticketController = require('./controller/ticketController');
const projectController = require('./controller/projectController');
const authController = require('./controller/authController');


//Auth Verification
routes.post('/auth',authController.auth);
routes.use(authController.verifyToken);

//User endpoints
routes.post('/user',userController.addUser);
routes.get('/user',userController.getUsers);
routes.get('/user/:id',userController.getUserById);
routes.get('/user/email/:email',userController.getUserByEmail);

//Ticket endpoints
routes.post('/ticket',ticketController.addTicket);
routes.get('/ticket',ticketController.getTickets);

//Project endpoints
routes.post('/project',projectController.addProject);
routes.get('/project',projectController.getProjects);

module.exports = routes;