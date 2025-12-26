// import app from '../app.js';
import express from 'express';

const memberRoute = express.Router();

memberRoute.get('/', (req, res) => {
  res.json('Hello World');
});

memberRoute.post('/', (req, res) => {
    
});

export default memberRoute;
