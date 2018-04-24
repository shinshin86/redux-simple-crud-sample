'use strict'
module.exports = function(app) {
  app.route('/test')
    .get((req, res) => {
      res.send('OK')
    })
};
