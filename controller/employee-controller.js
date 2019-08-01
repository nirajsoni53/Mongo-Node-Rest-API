let DB = require('../mongo-connection.js');
let mongoose = require('mongoose');

var collection = DB.collection('employee');

// INSERT EMPLOYEE DATA
module.exports.INSERT_EMPLOYEE = function (req, res) {
    let data = req.body;
    collection.insertOne(data);
    res.send('insert successfully');
};


// GET ALL EMPLOYEE DATA
module.exports.GET_EMPLOYEE = function (req, res) {
    collection
        .find()
        .toArray(
            function (err, result) {
                res.send(result);
            });
};


// UPDATE EMPLOYEE DATA
module.exports.UPDATE_EMPLOYEE = function (req, res) {
    let body = req.body;
    collection.updateOne(
        { _id: mongoose.Types.ObjectId(body.id) },
        { $set: body.data }
    );
    res.send('update successfully');
};


// GET EMPLOYEE DATA BY ID
module.exports.GET_EMPLOYEE_BY_ID = function (req, res) {
    let param = req.params;
    collection.find({ _id: mongoose.Types.ObjectId(param.id) })
        .toArray(
            function (err, result) {
                res.send(result);
            });
};