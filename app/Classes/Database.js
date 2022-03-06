const DatabaseConstant = require('../Constants/DatabaseConstant');

class Database {
  constructor(config) {
    this.config = config;
  }

  connect() {
    const { use, connections } = this.config;
    const config = connections[use];

    if (config.driver === DatabaseConstant.DRIVER.MYSQL) {
      return mysql.call(this, config);
    } else if (config.driver === DatabaseConstant.DRIVER.PG) {
      return pg.call(this, config);
    }
  }
}

function mysql(config) {
  return require('knex')({
    client: config.driver,
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.username,
      password: config.password,
      connectionTimeout: config.connectionTimeout,
    },
    acquireConnectionTimeout: config.acquireConnectionTimeout,
    pool: {
      min: config.poolMinConnection,
      max: config.poolMaxConnection,
      acquireTimeoutMillis: config.poolAcquireTimeoutMillis,
      createTimeoutMillis: config.poolCreateTimeoutMillis,
      destroyTimeoutMillis: config.poolDestroyTimeoutMillis,
      idleTimeoutMillis: config.poolIdleTimeoutMillis,
      reapIntervalMillis: config.poolReapIntervalMillis,
      createRetryIntervalMillis: config.poolCreateRetryIntervalMillis,
      propagateCreateError: config.poolPropagateCreateError,
    },
  });
}

function pg(config) {
  return require('knex')({
    client: config.driver,
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.username,
      password: config.password,
      connectionTimeout: config.connectionTimeout,
    },
    acquireConnectionTimeout: config.acquireConnectionTimeout,
    pool: {
      min: config.poolMinConnection,
      max: config.poolMaxConnection,
      acquireTimeoutMillis: config.poolAcquireTimeoutMillis,
      createTimeoutMillis: config.poolCreateTimeoutMillis,
      destroyTimeoutMillis: config.poolDestroyTimeoutMillis,
      idleTimeoutMillis: config.poolIdleTimeoutMillis,
      reapIntervalMillis: config.poolReapIntervalMillis,
      createRetryIntervalMillis: config.poolCreateRetryIntervalMillis,
      propagateCreateError: config.poolPropagateCreateError,
    },
  });
}

module.exports = Database;
