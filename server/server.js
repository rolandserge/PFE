import dotenv from "dotenv"
import cors from "cors"	
import router from "./routes/router.js"
import mongoose from "mongoose"
import express from 'express'
import morgan from 'morgan'

// Config
const app = express();;

const corsOptions ={
  origin:'http://localhost:5173', 
  credentials: true,
  optionSuccessStatus:200,
}
app.use('/images', express.static('uploads/modules'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors(corsOptions));
// route prefix
app.use("/api", router);


// config environment
dotenv.config()

// VARIABLES
const PORT = process.env.PORT || 5000;
// const HOSTNAME= process.env.HOSTNAME || "127.0.0.1";
// const server = http.createServer(app);


// DATABASE
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// RUN SERVER
app.listen(PORT, () => {
    console.log('Starting server....')
})