// IMPORT library
let express = require('express');

const hostname = '127.0.0.1'; // HOST
const port = 3000; // PORT

var app = express();  // CREATE EXPRESS APP

// LISTEN PORT
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});