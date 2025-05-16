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
                      background-color:rgb(25, 28, 53);
                      color:rgb(247, 247, 247);
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
              <h1> I just obtained my very first domain!😎🎉</h1>
              <p>And deployed my Express app 🤖🚀</p>
          </body>
      </html>
  `);
}

export default getRoot;