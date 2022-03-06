const { Model } = require('objection');

class UserEmails extends Model {
  static get tableName() {
    return 'user_emails';
  }
}

module.exports = UserEmails;
