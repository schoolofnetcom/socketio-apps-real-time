var mongoose = require('mongoose');
var connection;

module.exports = function() {
  if (!connection) {
    connection = mongoose.connect('mongodb://localhost/son_curso_socketio');
  }
  return connection;
}
