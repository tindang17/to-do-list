require('dotenv').config();
const express = require ('express');
const router = express.Router();
//set up knex
const ENV = process.env.ENV || "development";
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig[ENV]);

module.exports = router;
//todo page
router.get('/todos', (req, res) => {

});
