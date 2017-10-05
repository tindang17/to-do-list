// require('dotenv').config();
const express = require ('express');
const router = express.Router();
// import conenction details
const connectionDetails = require('../model/connectionDetails');
// import postgresql module
const pg = require ('pg');
// set up connection and create a client instance of Client
const pool = new pg.Pool(connectionDetails);

module.exports = router;
//todo page
router.post('/todos', (req, res) => {
  console.log('pool: ', pool);
  const results = [];
  // Grab data from http request
  const data = {todo: req.body.todo, complete: false};
  // Insert data into database
  pool.connect()
    .then(client => {
      return client.query(
        "INSERT INTO todo_items(todo,complete) values ($1,$2)",
        [data.todo, data.complete]
      )
      .then(result => {
        return results.push(result.rows[0])
      })
      .catch(err => {
        client.release();
        console.log('error while running query', err);
      })
    client.end();
  })
  res.status(200).json(results)
});
