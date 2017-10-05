// require('dotenv').config();
const settings = require("../../settings");
const conectionDetails = {
  user: settings.DB_USER,
  password: settings.DB_PASS,
  database: settings.DB_NAME,
  host: settings.DB_HOST,
  port: settings.DB_PORT
};

module.exports = conectionDetails;
