let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'test';      // REPLACE WITH YOUR DB NAME

//MONGO CONNECTION
mongoose.connect(`mongodb://${server}/${database}`);

//GET MONGO CONNECTION OBJECT
var DB = mongoose.connection;

//CALL WHEN ERROR WITH CONNECTION
DB.on('error', console.error.bind(console, 'connection error:'));

//CALL WHEN CONNECTION WITH DB SUCCESSFULLY
DB.once('open', function () {
  console.log("Connection Successful!");
});

// EXPORT DB MODULE
module.exports = DB;