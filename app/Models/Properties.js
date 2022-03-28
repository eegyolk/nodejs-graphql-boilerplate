const { Model } = require('objection');

class Properties extends Model {
  static get tableName() {
    return 'properties';
  }
}

module.exports = Properties;
