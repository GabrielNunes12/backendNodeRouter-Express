const express = require('express');
const app = express();
const routes = require('./routes');

app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
)

app.use(routes);

app.listen(3000, (req, res) =>  {
  console.log('Server is running!');
});
