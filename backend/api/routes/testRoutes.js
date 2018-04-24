'use strict'
module.exports = function(app) {
  var userController = require('../controllers/userController');

  // userController Routes
  app.route('/test')
    .get((req, res) => {
      res.send('OK')
    })
};
