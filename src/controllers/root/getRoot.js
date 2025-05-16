import config from '../../config.js';

/**
 * Health check endpoint
 * @param {import('express').Request} _req 
 * @param {import('express').Response} res 
 */
const getRoot = (_req, res) => {
    res.status(200).send('Hello from express, Ruiz 🤠✌️');
  }

export default getRoot