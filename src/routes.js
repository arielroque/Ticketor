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
 *     parameters:
*        - in: body
*          schema:
*            type: object
*            required:
*              - email
*              - password
*            properties:
*              email:
*                type: string
*              password:
*                type: string
 *     responses:
 *      '200': {
            description: 'Users were obtained',
            examples: {
              'application/json': {"success": true,"message": "Token successfully created",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlZT
              YyZTY1M2I3ZmJjMjMyZjcxYWVhYSIsIm5hbWUiOiJCcmFkIFRzaHVlIiwicGFzc3dvcmQiOiI
              kMmEkMTAkcUkwSS5LNGRnbnplOHVxQWhaV1hZT25hYmhLeW9tQUpoaWUvbC9TTFZ2YXA0ay44
              cWhwcE8iLCJlbWFpbCI6ImFAZ21haWwuY29tIiwicHJvamVjdElkIjoiNWVlNjJlMDczYjdmY
              mMyMzJmNzFhZWE4IiwidHlwZSI6ImdlbmVyYWwiLCJfX3YiOjB9LCJpYXQiOjE1OTIyNjcxOD
              QsImV4cCI6MTU5MjI3MDc4NH0.F6RfuRQeB55CEPjtxgHXMN_SvY_4Cv-02_M2meALVb4"}
            }
          }
          '400': {
            description: 'Wrong fields sent',
            examples: {
              'application/json': {"success": "false","message": "Invalid E-mail"}
            }
          }
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
 *     parameters:
*        - in: body
*          name: user
*          description: The user to create.
*          schema:
*            type: object
*            required:
*              - name
*              - email
*              - password
*              - type
*            properties:
*              name:
*                type: string
*              email:
*                type: string
*              password:
*                type: string
*              projectId:
*                type: string
*              type:
*                type: string
 *     
 *     responses:
 *      '200': {
            description: 'Added User',
            examples: {
              'application/json': {
                "_id": "5ee62efa00b112253526bd7c",
                "name": "Jorge Barry",
                "password": "$2a$10$m6E.FlYQCsiE4hRz2deUMuHnrnGIgltgR0Ns.GV66DzlafZ9O8pNy",
                "email": "support@gmail.com",
                "type": "support",
                "__v": 0
}
            }
          }
 *      '400': {
            description: 'Invalid Token',
            examples: {
              'application/json': {
              "success": false,
              "message": "Invalid Token"
              }
            }
          }
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
 *      '200': {
            description: 'Get all users registered',
            examples: {
              'application/json': {
                "_id": "5ee62efa00b112253526bd7c",
                "name": "Jorge Barry",
                "password": "$2a$10$m6E.FlYQCsiE4hRz2deUMuHnrnGIgltgR0Ns.GV66DzlafZ9O8pNy",
                "email": "support@gmail.com",
                "type": "support",
                "__v": 0
}
            }
          }
 *      '400': {
            description: 'Invalid Token',
            examples: {
              'application/json': {
              "success": false,
              "message": "Invalid Token"
              }
            }
          }
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
 *      '200': {
            description: 'Get user by id',
            examples: {
              'application/json': {
                "_id": "5ee62efa00b112253526bd7c",
                "name": "Jorge Barry",
                "password": "$2a$10$m6E.FlYQCsiE4hRz2deUMuHnrnGIgltgR0Ns.GV66DzlafZ9O8pNy",
                "email": "support@gmail.com",
                "type": "support",
                "__v": 0
}
            }
          }
 *      '400': {
            description: 'Invalid Token',
            examples: {
              'application/json': {
              "success": false,
              "message": "Invalid Token"
              }
            }
          }
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
 *      '200': {
            description: 'Get user by e-mail',
            examples: {
              'application/json': {
                "_id": "5ee62efa00b112253526bd7c",
                "name": "Jorge Barry",
                "password": "$2a$10$m6E.FlYQCsiE4hRz2deUMuHnrnGIgltgR0Ns.GV66DzlafZ9O8pNy",
                "email": "support@gmail.com",
                "type": "support",
                "__v": 0
}
            }
          }
 *      '400': {
            description: 'Invalid Token',
            examples: {
              'application/json': {
              "success": false,
              "message": "Invalid Token"
              }
            }
          }
 *  
 *     
 */

routes.get('/user/email/:email',userController.getUserByEmail);

//Ticket endpoints

/**
 * @swagger
 * /ticket:
 *   post:
 *     description:  Insert new ticket
 * 
      
 *     responses:
 *      '200':
 *       description: A successful response with token to use in next requests
 *  
 *     
 */
routes.post('/ticket',ticketController.addTicket);

/**
 * @swagger
 * /ticket:
 *   post:
 *     description:  Insert new users in the database
 * 
 *     parameters:
*        - in: body
*          name: user
*          description: The user to create.
*          schema:
*            type: object
*            required:
*              - name
*              - email
*              - password
*              - type
*            properties:
*              name:
*                type: string
*              email:
*                type: string
*              password:
*                type: string
*              projectId:
*                type: string
*              type:
*                type: string
 *     
 *     responses:
 *      '200': {
            description: 'Added User',
            examples: {
              'application/json': {
                "_id": "5ee62efa00b112253526bd7c",
                "name": "Jorge Barry",
                "password": "$2a$10$m6E.FlYQCsiE4hRz2deUMuHnrnGIgltgR0Ns.GV66DzlafZ9O8pNy",
                "email": "support@gmail.com",
                "type": "support",
                "__v": 0
}
            }
          }
 *      '400': {
            description: 'Invalid Token',
            examples: {
              'application/json': {
              "success": false,
              "message": "Invalid Token"
              }
            }
          }
 *  
 *     
 */

routes.get('/ticket',ticketController.getTickets);


//Project endpoints

/**
 * @swagger
 * /project:
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
 *      '400': {
            description: 'Invalid Token',
            examples: {
              'application/json': {"success": false,"message": "Token not sent in request"
}
            }
          }
 *  
 *     
 */


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