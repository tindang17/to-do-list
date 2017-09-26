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
// establish communication with database
pool.connect((err) => {
  if (err) {
    return console.log('Connection error', err);
  }
  client.query('CREATE TABLE items (id SERIAL PRIMARY KEY, text VARCHAR(50) not null, complete BOOLEAN)', (err) => {
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
