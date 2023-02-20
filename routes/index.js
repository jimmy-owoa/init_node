const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messages');

// root route with messages from database
router.get('/', messageController.getMessages);
router.get('/about', (req, res) => {
  res.render('about');
});
router.post('/messages', messageController.create);

module.exports = router;
