const express = require("express");
const mountRoutes = require('./routes/index');
const app = express(); 
app.use(express.static('public'))
app.listen(3001, () => {
  console.log('server is running on port 3001')
})
mountRoutes(app);


