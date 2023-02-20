const Message = require('../models/message');

exports.create = (req, res, next) => {
  const message = new Message({
    title: req.body.title,
    body: req.body.body
  });
  message.save()
    .then(() => {
      Message.find()
        .then(messages => {
          console.log("Messages: ", messages);
          res.render('index', { messages });
        })
        .catch(error => {
          console.log("Error: ", error);
          next(error);
        });
    })
    .catch(error => {
      console.log("Error: ", error);
      next(error);
    });
};

exports.getMessages = (req, res, next) => {
  Message.find()
    .then(messages => {
      res.render('index', { messages });
    })
    .catch(error => {
      next(error);
    });
};
