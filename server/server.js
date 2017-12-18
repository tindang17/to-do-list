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

app.get('/api/todos', (req, res) => {
  knex.select('*')
      .from('todo_items')
      .then(result => {
        res.json(result);
      });
});

app.post('/api/todos', (req, res) => {
  knex
  .insert({
      todo: req.body.name,
      complete: req.body.complete
  })
  .into('todo_items')
  .then(result => {
    res.json(result).status(200);
  })
  .catch(error => console.log(`Error while running query ${error}`));
});

app.post('/api/todos/:id')
app.listen(3001, () => {
  console.log('server is running on port 3001')
});


