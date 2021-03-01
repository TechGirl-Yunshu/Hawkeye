const express = require('express');
const oauthRoutes = require('./server/routes/oauthRoutes');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./server/config/keys.js');
require('./server/models/Users');
require('./server/services/passport');

//handle mangoDB
mongoose.connect(keys.mongoURI);

//handle google OAuth
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize());
app.use(passport.session());

oauthRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);



