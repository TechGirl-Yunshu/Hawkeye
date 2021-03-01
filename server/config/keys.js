
if (process.env.NODE_ENV === 'production'){
  //production -- need the prod keys
  module.exports = require('./prod');
} else {
  //development -- need the dev keys
  module.exports = require('./dev');
}
