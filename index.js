const express = require('express');
const oauthRoutes = require('./server/routes/oauthRoutes');
const mongoose = require('mongoose');
const keys = require('./server/config/keys.js');
require('./server/models/Users');
require('./server/services/passport');

//handle mangoDB
mongoose.connect(keys.mongoURI);

//handle google OAuth
const app = express();
oauthRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);



