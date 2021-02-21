const express = require('express');
require('./server/services/passport');
const oauthRoutes = require('./server/routes/oauthRoutes');

const app = express();

oauthRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

