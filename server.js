const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
app.use(express.json());  // Middleware to parse JSON bodies
app.use('/', require('./routes/routes'));

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
