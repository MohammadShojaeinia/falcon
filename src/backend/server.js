const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('../backend/routes/auth')

//connect to database
dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log('connected to db!')
);

//Middleware
app.use(express.json());

//middlewareroutes
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server up and running'));