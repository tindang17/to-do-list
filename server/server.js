const express = require("express");
const app = express();
//set up knex
const ENV = process.env.ENV || "development";
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.listen(3001, () => {
  console.log('server is running on port 3001')
});


