const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Set up routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
