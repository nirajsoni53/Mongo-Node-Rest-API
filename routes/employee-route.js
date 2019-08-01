let express = require('express');
let employee_ctrl = require('../controller/employee-controller.js');
var employee_route = express.Router();

// INSERT EMPLOYEE DATA
employee_route
    .route('/insert')
    .post(employee_ctrl.INSERT_EMPLOYEE);

// GET ALL EMPLOYEE DATA    
employee_route
    .route('/get')
    .get(employee_ctrl.GET_EMPLOYEE);

// UPDATE EMPLOYEE DATA    
employee_route
    .route('/update')
    .post(employee_ctrl.UPDATE_EMPLOYEE);

// GET EMPLOYEE DATA BY ID
employee_route
    .route('/get/:id')
    .get(employee_ctrl.GET_EMPLOYEE_BY_ID);

module.exports = employee_route;