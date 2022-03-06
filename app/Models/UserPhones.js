const { Model } = require('objection');

class UserPhones extends Model {
  static get tableName() {
    return 'user_phones';
  }
}

module.exports = UserPhones;
