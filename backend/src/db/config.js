const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  throw new Error('Falta la variable de entorno DB_URI para conectar a MongoDB.');
}

(async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('No se pudo conectar a MongoDB:', error.message);
    process.exitCode = 1;
  }
})();

module.exports = mongoose.connection;
