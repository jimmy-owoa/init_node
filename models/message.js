const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  title: String,
  body: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
