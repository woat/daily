const express = require('express');
const path = require('path');
const htmlController = require('./controllers/htmlController');
const apiController = require('./controllers/apiController');

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

htmlController(app);
apiController(app);

app.listen(port);
