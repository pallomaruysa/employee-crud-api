/**
 * file: app.js
 * description: file responsiible for making the connection with the file 'server.js'
 * date: 02/25/2023
 * author: Palloma Ruysa
 */

const express = require ('express');
const cors = require ('cors');

const app = express ();

// ==> Rotas da API (Employee) 
const index = require('./routes/index');
// const employeeRoute = require ('./routes/employee.routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
//app.use('/api/', employeeRoute);

module.exports = app; 