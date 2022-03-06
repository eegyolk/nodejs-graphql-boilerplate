const { Model } = require('objection');

class UserPersonas extends Model {
  static get tableName() {
    return 'user_personas';
  }
}

module.exports = UserPersonas;
