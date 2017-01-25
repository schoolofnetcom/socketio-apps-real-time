module.exports = function (app) {
  var model = app.model.user;
  var service = require('../service/crud')(model);

  return {
    index: function (req, res) {
      service.list().then((result) => {
          console.log(result.data);
          return res.render('users/index', {data: result.data});
        });
    },
    add: function (req, res) {
      if (req.method == 'POST') {
        service.insert(req.body)
          .then(() => {
            return res.redirect('/users');
          })
          .catch((err) => {
            return res.json(err);
          });
      } else {
        return res.render('users/add');
      }
    },
    view: function (req, res) {
      service.get(req.params.id)
        .then((result) => {
          return res.render('users/view', {data: result.data});
        })
        .catch((err) => {
          return res.send(404, 'Page not found');
        })
    },
    remove: function (req, res) {
      service.delete(req.params.id)
        .then((result) => {
          return res.redirect('/users');
        })
        .catch((err) => {
          return res.json(err);
        })
    }
  }
}
