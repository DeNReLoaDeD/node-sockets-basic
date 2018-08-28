const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //listen cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         resp: 'todo ok man'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo mal mannnnnnnnnnnnnnnnnnnnnnn'
        //     });
        // }


    });

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Welcome to the jungle'
    });
});