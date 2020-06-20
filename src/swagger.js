const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    apis: ['src/routes.js'],
    basePath: '/',
    swaggerDefinition: {
      info: {
        description: 'Ticketor is a simple helpdesk API to assist users in contacting support ',
        swagger: '2.0',
        title: 'Ticketor API',
        version: '1.2.0',
        servers: [
          {
            url: 'http://localhost:5000/',
            description: 'Local server'
          },
        ], 
      },
    },
  };
  const specs = swaggerJsdoc(options);
 module.exports = specs;