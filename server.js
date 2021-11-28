import dotenv from 'dotenv'; //to setup private keys which we dont want to send to github and make them available only in app runtime
dotenv.config();

import express from 'express';
const app = express();

import helmet from 'helmet'; //prevent cross site forgery, attack etc
import morgan from 'morgan'; //this enables to check actions and logs just before the site is down
import cors from 'cors';

const PORT = process.env.PORT || 8000;

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json()); //to access the json data sent from Front End to Back End
app.use(cors());
app.use(express.urlencoded({ extended: true })); //to submit the form data other than json such as form, photos, file etc

// connect to DB
import mongoClient from './src/config/db.js';
mongoClient();

app.use('/', (req, res, next) => {
  res.send('ok');
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`server is ready at http://localhost:${PORT}`);
});
