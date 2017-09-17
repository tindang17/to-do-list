const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// const db = {
//   toDo:[]
// };

// const dataHelper = (db) => {
//   return {
//     saveToDo: function(newToDo, callbacks)
//   }
// }
// app.get('/', (req, res) => {

// })