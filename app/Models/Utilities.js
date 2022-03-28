const { Model } = require('objection');

class Utilities extends Model {
  static get tableName() {
    return 'utilities';
  }
}

module.exports = Utilities;
