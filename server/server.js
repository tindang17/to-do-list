const express = require("express");
const mountRoutes = require('./routes/index');
const app = express();
mountRoutes(app);


