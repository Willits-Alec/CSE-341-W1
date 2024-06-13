//Server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/', require('./routes/routes'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});

