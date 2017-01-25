module.exports = function (io) {
  io.sockets.on('connection', function (client) {
    client.emit('hello', {title: 'Bem vindo', msg: 'Você está conectado'});

    client.on('user_add', function(data) {
      client.broadcast.emit('user_add_response', {
        title: 'Novo professor',
        msg: 'O professor ' + data.nome + ' foi contratado'
      });
    });

    client.on('user_remove', function(data) {
      client.broadcast.emit('user_remove_response', {
        title: 'Professor removido',
        msg: 'O professor ' + data.nome + ' foi demitido'
      });
    });
  });
}
