const app = require("./app");
const dotenv = require("dotenv");
const http = require("node:http");

// ORM javascript comuniquer avec ma bd 
const mongoose = require("mongoose");


// config environment
dotenv.config()

// VARIABLES
const PORT = process.env.PORT || 5000;
const HOSTNAME= process.env.HOSTNAME || "127.0.0.1";
const server = http.createServer(app);

// DATABASE
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// RUN SERVER
server.listen(PORT, HOSTNAME, () => {
    console.log('Starting server....')
})