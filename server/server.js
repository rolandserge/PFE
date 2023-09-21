import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from "dotenv"
import cors from "cors"	
import router from "./routes/router.js"
import mongoose from "mongoose"
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import dyteAPI from './utils/dyteApi.js';
import Meet from './models/meet.js';

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
app.use(cookieParser());
// route prefix
app.use("/api", router);

dotenv.config()


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY, 
  secure: true,
});


// config environment

// VARIABLES
const PORT = process.env.PORT || 5000;
// const HOSTNAME= process.env.HOSTNAME || "127.0.0.1";
// const server = http.createServer(app);


app.post('/api/meetings', async (req, res) => {
  const { title } = req.body
  const { data } = await dyteAPI.post('/meetings', {
    title,
  });
  
  await Meet.create({
    meetingId: data.data.id
  })
  
  res.status(200).json(data.data.id);

});

app.post('/api/meetings/:meetingId/participants', async (req, res) => {
  const meetingId = req.params.meetingId
  const { name, picture, preset_name } = req.body
  const client_specific_id = `react-samples::${name.replaceAll(' ', '-')}-${Math.random().toString(36).substring(2, 7)}`;

    const { data } = await dyteAPI.post(`/meetings/${meetingId}/participants`, {
      name,
      picture,
      preset_name,
      client_specific_id,
    });

    res.status(200).json(data.data.token);
});

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