const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/init_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => console.error('Error al conectar a la base de datos: ', error));


// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// Set up view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Set up routes
const routes = require('./routes/index');
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

