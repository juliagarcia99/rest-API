const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false}));

const legumes = require('./legumes');

app.use('/', legumes);

module.exports = app;

