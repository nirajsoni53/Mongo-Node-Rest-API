// IMPORT library
let express = require('express');
let routes = require('./routes/employee-route.js');
var bodyParser = require('body-parser');

const hostname = '127.0.0.1'; // HOST
const port = 3000; // PORT

var app = express();  // CREATE EXPRESS APP

app.use(bodyParser.json()); // Body parser for accept json request
app.use('/employee',routes); // Create route for Employee

// LISTEN PORT
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});