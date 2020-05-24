require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

/**
 * Database setup
 */

mongoose.connect(process.env.MONGO_URL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
  );

app.use(require('./routes'));

app.listen(3001);