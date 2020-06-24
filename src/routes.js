const express = require('express');
const routes = express.Router();
const userController = require('./controller/userController');
const ticketController = require('./controller/ticketController');
const projectController = require('./controller/projectController');
const authController = require('./controller/authController');
const swaggerUi = require('swagger-ui-express');
const swagger = require('../src/swagger');

//Swagger Documentation endpoint
routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swagger));


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
*          description: User body
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
            description: 'Inserted user response',
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
 *      '401': {
            description: 'Invalid token',
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
            description: 'Users registered response',
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
 *      '401': {
            description: 'Invalid Token',
            examples: {
              'application/json': {
              "success": false,
              "message": "Invalid token"
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
 *     description:  Get user by id
 * 
 *     responses:
 *      '200': {
            description: 'User response',
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
 *      '401': {
            description: 'Invalid token',
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
            description: 'User response',
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
 *      '401': {
            description: 'Invalid token',
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
 *     parameters:
*        - in: body
*          name: user
*          description: Ticket body
*          schema:
*            type: object
*            required:
*              - title
*              - description
*              - priority
*              - authorId
*            properties:
*              title:
*                type: string
*              description:
*                type: string
*              priority:
*                type: string
*              authorId:
*                type: string
 *     
 *     responses:
 *      '200': {
            description: 'Inserted Ticket Response',
            examples: {
              'application/json': {
                "_id": "5ef1e80c8557a150954dcfc2",
                "title": "Windows problem",
                "description": "My computer has broken",
                "priority": "High",
                "authorId": "5ee62e653b7fbc232f71aeaa",
                "date": "2020-06-23T11:31:24.904Z",
                "__v": 0
}
            }
          }
 *      '401': {
            description: 'Invalid token',
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
routes.post('/ticket',ticketController.addTicket);

/**
 * @swagger
 * /ticket:
 *   get:
 *     description:  Get all tickets registered
 * 
 *     responses:
 *      '200': {
            description: 'Tickets registered response',
            examples: {
              'application/json': {
              "_id": "5ee62e073b7fbc232f71aea8",
              "name": "Insominia",
              "room": "12b",
              "created": "2019-03-19T00:00:00.000Z",
              "__v": 0
  }
            }
          }
 *      '401': {
            description: 'Invalid token',
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

routes.get('/ticket/solved',ticketController.getSolvedTickets);

routes.get('/ticket/unsolved',ticketController.getUnsolvedTickets);


routes.get('/ticket/:email',ticketController.getTicketsByEmail);

routes.get('/ticket/:email/solved',ticketController.getSolvedTicketsByEmail);

routes.get('/ticket/:email/solved/high',ticketController.getSolvedTicketsByEmailHighPriority);

routes.get('/ticket/:email/solved/medium',ticketController.getSolvedTicketsByEmailMediumPriority);

routes.get('/ticket/:email/solved/low',ticketController.getSolvedTicketsByEmailLowPriority);


routes.get('/ticket/:email/unsolved',ticketController.getUnsolvedTicketsByEmail);

routes.get('/ticket/:email/unsolved/high',ticketController.getUnsolvedTicketsByEmailHighPriority);

routes.get('/ticket/:email/unsolved/medium',ticketController.getUnsolvedTicketsByEmailMediumPriority);

routes.get('/ticket/:email/unsolved/low',ticketController.getUnsolvedTicketsByEmailLowPriority);


routes.get('/ticket/solved/high',ticketController.getTicketsByHighPriority);

routes.get('/ticket/solved/medium',ticketController.getTicketsByMediumPriority);

routes.get('/ticket/solved/low',ticketController.getTicketsByLowPriority);


routes.get('/ticket/unsolved/high',ticketController.getTicketsByHighPriority);

routes.get('/ticket/unsolved/medium',ticketController.getTicketsByMediumPriority);

routes.get('/ticket/unsolved/low',ticketController.getTicketsByLowPriority);


routes.patch('/ticket/:id/solver',ticketController.solverTicket);


//Project endpoints

/**
 * @swagger
 * /project:
 *   post:
 *     description:  Insert new project
 * 
 *     parameters:
*        - in: body
*          name: user
*          description: Project body
*          schema:
*            type: object
*            required:
*              - name
*              - room
*              - created
*              
*            properties:
*              title:
*                type: string
*              description:
*                type: string
*              created:
*                type: string
*              
 * 
 *     responses:
 *      '200': {
            description: 'Inserted project response',
            examples: {
              'application/json': {
              "_id": "5ee82652fbd2c72a6ff9d021",
              "name": "Insominia",
              "room": "12b",
              "created": "2019-03-19T00:00:00.000Z",
              "__v": 0
}
            }
          }
 *      '401': {
            description: 'Invalid token',
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
 *      '200': {
            description: 'Projects response',
            examples: {
              'application/json': {
              "_id": "5ee82652fbd2c72a6ff9d021",
              "name": "Insominia",
              "room": "12b",
              "created": "2019-03-19T00:00:00.000Z",
              "__v": 0
}
            }
          }
 *  
 *     
 */


routes.get('/project',projectController.getProjects);
module.exports = routes;