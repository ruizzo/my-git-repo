import config from '../../config.js';

/**
 * Health check endpoint
 * @param {import('express').Request} _req 
 * @param {import('express').Response} res 
 */
const getRoot = (_req, res) => {
  res.status(200).send(`
      <html>
          <head>
              <title>My First Domain</title>
              <style>
                  body {
                      background-color: #282c34;
                      color: #61dafb;
                      font-family: Arial, sans-serif;
                      text-align: center;
                      padding-top: 100px;
                  }
                  h1 {
                      font-size: 3rem;
                  }
              </style>
          </head>
          <body>
              <h1>🚀 I just obtained my first domain!</h1>
              <p>And deployed my Express app with style 🎉</p>
          </body>
      </html>
  `);
}

export default getRoot;