// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['https', 'http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js', './routes/routes.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);





const endpointFiles = ['/routes/routes.js']