var Message = require('../models/message.model')

module.exports = function (io) {
  var app = require('express');
  var router = app.Router();

  /* GET home page. */
  router.get('/', async function (req, res, next) {
    let messages = await Message.find();
    // messages = ["HI!", "EVERYODY!"];
    res.render('index', { title: 'Timer Express', messages: JSON.stringify(messages) });
  });

  router.get('/update', async function (req, res, next) {
    io.emit('reload', 'Software Updated')
    res.send("UPDATED");
  });

  io.on('connection', async function (socket) {
    console.log('a user connected', socket.request.connection.remoteAddress);

    socket.on('message', async function(message){

      var newMessage  = new Message({
        message: message,
        remote_address: socket.request.connection.remoteAddress,
        date: new Date()
      })

      await newMessage.save();

      io.emit('message', {message, remote_address: socket.request.connection.remoteAddress})

    });


    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

  return router;
}