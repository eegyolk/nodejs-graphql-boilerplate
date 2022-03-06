const express = require('express'),
  app = express(),
  compression = require('compression');

const appBootstrap = require('../bootstrap/app'),
  config = appBootstrap.config;

app.use(compression({ threshold: 0 }));
app.disable('x-powered-by');

appBootstrap.extendApp({ app });

if (config.app.env !== 'test') {
  app.listen(config.app.port, () => {
    console.log(
      `Server listening at port ${config.app.port} with process id ${process.pid}`
    );
  });
} else {
  module.exports = app;
}
