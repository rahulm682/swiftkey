// import connectToMongo from './db';
const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 5000;

// using cors
var cors = require('cors')
app.use(cors())


// Connect To database
connectToMongo();

// Use this middleware as we are sending data in json format to the server
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/report', require('./routes/report'));

app.listen(port, () => {
    console.log("This is port http://localhost:" + port);
});


