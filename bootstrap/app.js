require('dotenv').config();

const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { Model } = require('objection');
const { v4: uuidv4 } = require('uuid');

const Database = require('../app/Classes/Database');
const Logger = require('../app/Classes/Logger');

const appConfig = require('../config/app'),
  databaseConfig = require('../config/database'),
  loggerConfig = require('../config/logger'),
  redisConfig = require('../config/redis'),
  telegramConfig = require('../config/telegram');

const allLoader = require('../app/GraphQL/allLoader'),
  allMutation = require('../app/GraphQL/allMutation'),
  allQuery = require('../app/GraphQL/allQuery'),
  expressPlayground = require('graphql-playground-middleware-express').default;

const webRoutes = require('../routes/web');

module.exports.config = {
  app: appConfig,
  database: databaseConfig,
  logger: loggerConfig,
  redis: redisConfig,
  telegram: telegramConfig,
};

module.exports.extendApp = function ({ app }) {
  Model.knex(new Database(this.config.database).connect());

  app.locals.config = this.config;

  // Middleware to setup cors
  // TODO: Add configurations
  app.use(cors());

  // Midddleware to setup logger
  app.use(function (req, res, next) {
    req.log = new Logger(req.app.locals.config.logger).child({
      reqId: uuidv4(),
    });

    const { method, headers, body, query, originalUrl } = req;
    const logMessage = {
      method,
      headers,
      endpoint: originalUrl,
    };

    // TODO:: Add ip here, implementation may vary based on setup
    // TODO:: Get body and query being requested

    req.log.info(logMessage);

    next();
  });

  // Middleware to setup graphql
  const schema = new GraphQLSchema({
    query: allQuery,
    mutation: allMutation,
  });
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      context: {
        loaders: allLoader,
      },
      graphiql: false,
    })
  );
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

  // Middleware to setup routes
  app.use(webRoutes);
};
