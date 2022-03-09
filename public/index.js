const express = require('express'),
  app = express(),
  compression = require('compression');

const bootstrapApp = require('../bootstrap/app');
config = bootstrapApp.config;

app.use(compression({ threshold: 0 }));
app.disable('x-powered-by');

bootstrapApp.setup({ app });

if (config.app.env !== 'test') {
  (async () => bootstrapApp.startApolloServer({ app }))();
} else {
  module.exports = app;
}
