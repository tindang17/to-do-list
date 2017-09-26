const express = require ('express');
const router = express.Router();
require('dotenv').config();
// import postgresql module
const pg = require ('pg');
// set up connection and create a client instance of Client
const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});

module.exports = router;
//todo page
router.post('/todos', (req, res) => {
  const results = [];
  // Grab data from http request
  const data = {text: req.body.text, complete: false};
  // Insert data into database
  pool.connect()
    .then(client => {
      return client.query('INSERT INTO items(text, complete) values $1, $2', [data.text, data.complete])
    })
    .then(client => {
      return client.query('SELECT * FROM items(text, complete ORDER BY id ASC')
    })
    .then(result => {
      client.release();
      return results.push(result.row[0])
    })
    .catch(err => {
      client.release();
      console.log('error while running query', err);
    })
  res.status(200).json(results)
});