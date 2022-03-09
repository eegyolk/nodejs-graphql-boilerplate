require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const cors = require('cors');
const { GraphQLSchema } = require('graphql');
const helmet = require('helmet');
const http = require('http');
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
  allQuery = require('../app/GraphQL/allQuery');

const webRoutes = require('../routes/web');

module.exports.config = {
  app: appConfig,
  database: databaseConfig,
  logger: loggerConfig,
  redis: redisConfig,
  telegram: telegramConfig,
};

module.exports.setup = function ({ app }) {
  Model.knex(new Database(this.config.database).connect());

  app.locals.config = this.config;

  // Middleware to setup cors
  // TODO: Add configurations
  // app.use(cors(), helmet());

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

  // Middleware to setup routes
  app.use(webRoutes);
};

module.exports.startApolloServer = async function ({ app }) {
  const httpServer = http.createServer(app);

  const schema = new GraphQLSchema({
    query: allQuery,
    mutation: allMutation,
  });

  const server = new ApolloServer({
    schema,
    context: { loaders: allLoader },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise((resolve) =>
    httpServer.listen({ port: this.config.app.port }, resolve)
  );
  console.log(
    `🚀 Server ready at ${this.config.app.url}:${this.config.app.port}${server.graphqlPath} with process id ${process.pid}`
  );
};
