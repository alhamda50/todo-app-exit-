const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(cors());

const bRoute = require('./Routes/basicRoutes');
app.use('/todo', bRoute);

require('dotenv').config();

require('./db/connection')

app.listen(6001, () => {
    console.log('Server is running on port 6001');
})