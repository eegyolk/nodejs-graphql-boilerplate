const { Model } = require('objection');

class Features extends Model {
  static get tableName() {
    return 'features';
  }
}

module.exports = Features;
