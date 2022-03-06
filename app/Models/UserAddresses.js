const { Model } = require('objection');

class UserAddresses extends Model {
  static get tableName() {
    return 'user_addresses';
  }
}

module.exports = UserAddresses;
