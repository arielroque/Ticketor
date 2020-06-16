const express = require('express');
const routes = express.Router();
const userController = require('./controller/userController');
const ticketController = require('./controller/ticketController');
const projectController = require('./controller/projectController');
const authController = require('./controller/authController');
const swaggerUi = require('swagger-ui-express');
const swagger = require('../src/swagger');

//Swag Documentation endpoint
routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swagger));;

//Auth Verification endpoints

/**
 * @swagger
 * /auth:
 *   post:
 *     description:  Authenticate the users
 * 
 *     parameters: [
          {
            name: 'email',
            in: 'body',
            
            required: true,
            description: 'User e-mail registered'
          },
          {
            name: 'password',
            in: 'body',
    
            required: true,
            description: 'User password registered'
          }
        ]
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */

routes.post('/auth',authController.auth);
routes.use(authController.verifyToken);

//User endpoints
/**
 * @swagger
 * /user:
 *   post:
 *     description:  Insert new users in the database
 * 
 *     parameters: [
          {
            name: 'name',
            in: 'body',
            
            required: true,
            description: 'User name to be registered'
          },
          {
            name: 'password',
            in: 'body',
    
            required: true,
            description: 'User password to be registered'
          },

          {
            name: 'e-mail',
            in: 'body',
    
            required: true,
            description: 'User email to be registered'
          },

          {
            name: 'projectId',
            in: 'body',
            required: false,
            description: 'Project id linked with user'
          },

          {
            name: 'type',
            in: 'body',
            required: true,
            description: 'Account Type (general, support)'
          }
        ]
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */

routes.post('/user',userController.addUser);

/**
 * @swagger
 * /user:
 *   get:
 *     description:  Get all users registered
 * 
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */

routes.get('/user',userController.getUsers);

/**
 * @swagger
 * /user:id:
 *   get:
 *     description:  Get all user by id
 * 
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */

routes.get('/user/:id',userController.getUserById);

/**
 * @swagger
 * /user/email/:email:
 *   get:
 *     description:  Get user by e-mail
 * 
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */

routes.get('/user/email/:email',userController.getUserByEmail);

//Ticket endpoints
routes.post('/ticket',ticketController.addTicket);

/**
 * @swagger
 * /ticket:
 *   get:
 *     description:  Get all tickets registered
 * 
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */

routes.get('/ticket',ticketController.getTickets);

//Project endpoints
routes.post('/project',projectController.addProject);

/**
 * @swagger
 * /project:
 *   get:
 *     description:  Get all project registered
 * 
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */

routes.get('/project',projectController.getProjects);

module.exports = routes;