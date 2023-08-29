const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');

// Config
const app = express();
// 'Access-Control-Allow-Origin': '*';
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// exports
module.exports = app;