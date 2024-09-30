// server.js
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection'); 
const apiRoutes = require('./routes/apiRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Use routes
app.use('/api', apiRoutes); 

// Sync sequelize models and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
