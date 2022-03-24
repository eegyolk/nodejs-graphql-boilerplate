const { Model } = require('objection');

class UserIdentifications extends Model {
  static get tableName() {
    return 'user_identifications';
  }
}

module.exports = UserIdentifications;
