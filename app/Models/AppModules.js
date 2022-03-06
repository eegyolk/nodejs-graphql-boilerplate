const { Model } = require('objection');

class AppModules extends Model {
  static get tableName() {
    return 'app_modules';
  }
}

module.exports = AppModules;
