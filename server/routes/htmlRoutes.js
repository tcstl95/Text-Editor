const path = require('path');
// Html route
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
  );
