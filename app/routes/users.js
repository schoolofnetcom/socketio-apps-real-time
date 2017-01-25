module.exports = function (app) {
  var controller = app.controller.users;
  app.get('/users', controller.index);
  app.get('/users/add', controller.add);
  app.post('/users/add', controller.add);
  app.get('/users/:id', controller.view);
  app.get('/users/:id/remove', controller.remove);
}
