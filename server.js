//server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
app.use(express.json());  // Middleware to parse JSON bodies
app.use('/', require('./routes/routes'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-with, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})


// Use Swagger-UI-express for your app documentation endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("Error: MONGODB_URI environment variable is not defined.");
    process.exit(1);
}

mongoose.connect(mongoURI)
   .then(() => console.log('Connected to MongoDB'))
   .catch((error) => console.log('Error connecting to MongoDB:', error));

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
