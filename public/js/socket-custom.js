var socket = io();

//escuchar eventos
socket.on('connect', function() {
    console.log('conecado al servidor');
});

socket.on('disconnect', function() {
    console.log("servidor caido");
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Toni montero',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

//escuchar info
socket.on('enviarMensaje', function(data) {
    console.log(data);
});