const express = require('express');
const { StaticRouter } = require('react-router');

const App = require('./dist/ssr/app');

const app = express();

app.get('*', (req, res) => {
  console.log(req.url);
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>React App</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${req.url}</div>
        <div id="modal-container"></div>
      </body>
    </html>
  `);
  res.end();
});

app.listen(3000, () => {
  console.log('El servidor prendio en el puerto 3000');
});