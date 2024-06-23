// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation',
  },
  host: 'localhost:3000', // adjust this if your server is running on a different port
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js', './routes/routes.js']; // Add paths to your route files

swaggerAutogen(outputFile, endpointsFiles, doc);
