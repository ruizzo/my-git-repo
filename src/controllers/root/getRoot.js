import config from '../../config.js';

/**
 * Health check endpoint
 * @param {import('express').Request} _req 
 * @param {import('express').Response} res 
 */
const getRoot = (_req, res) => {
  res.status(200).send('🚀 I just obtained my first domain and deployed my Express app! 😎🎉');
}

export default getRoot;