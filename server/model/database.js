// require('dotenv').config();
// import postgresql module
const pg = require ('pg');
// set up connection and create a client instance of Client
const connectionDetails = require('./connectionDetails');

const pool = new pg.Pool(connectionDetails);

// establish communication with database
pool.connect((err, client) => {
  if (err) {
    return console.log('Connection error', err);
  }
  client.query(
    'CREATE TABLE todo_items (id SERIAL PRIMARY KEY, todo VARCHAR(80) not null, complete BOOLEAN)',
    (err) => {
      if(err) {
        console.log('error while running query', err);
      }
    client.end();
  });
});

// // Run query
// module.exports = {
//   query: (text, params, callback) => {
//     return client.query(text, params, callback)
//   }
// }
