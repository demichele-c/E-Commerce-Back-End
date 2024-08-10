const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Import the Sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to parse URL-encoded data with extended option
app.use(express.urlencoded({ extended: true }));

// Middleware to use the routes defined in the routes module
app.use(routes);

// Sync Sequelize models to the database, then start the server
sequelize.sync({ force: false }) // Ensure models are synchronized with the database
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
