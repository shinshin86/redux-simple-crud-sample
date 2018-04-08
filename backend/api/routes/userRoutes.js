'use strict'
module.exports = function(app) {
  var userController = require('../controllers/userController');

  // userController Routes
  app.route('/users')
    .get(userController.allUser)

  app.route('/user/new')
    .post(userController.createUser);

  app.route('/user/:userId')
    .get(userController.readUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
};
