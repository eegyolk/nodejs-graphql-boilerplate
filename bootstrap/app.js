require('dotenv').config();

const { v4: uuidv4 } = require('uuid');

const Database = require('../app/Classes/Database');
const Logger = require('../app/Classes/Logger');

const appConfig = require('../config/app'),
  databaseConfig = require('../config/database'),
  loggerConfig = require('../config/logger'),
  redisConfig = require('../config/redis'),
  telegramConfig = require('../config/telegram');

const graphqlRoutes = require('../routes/graphql'),
  webRoutes = require('../routes/web');

module.exports.config = {
  app: appConfig,
  database: databaseConfig,
  logger: loggerConfig,
  redis: redisConfig,
  telegram: telegramConfig,
};

module.exports.extendApp = function ({ app }) {
  app.locals.databaseConnections = new Database(
    this.config.database
  ).createConnections();
  app.locals.config = this.config;

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

  app.use('/graphql', graphqlRoutes);
  app.use(webRoutes);
};
