import express from 'express';
import getRoot from '../controllers/root/getRoot';
import postRoot from '../controllers/root/postRoot';

const root = express.Router()

root.get('/', getRoot)
root.post('/', postRoot)

//new route
root.get('/', (req, res) => {
    res.send('Hello from express');
  });
  
export default root;


