const { Model } = require('objection');

class UserRoles extends Model {
  static get tableName() {
    return 'user_roles';
  }
}

module.exports = UserRoles;
