const { Model } = require('objection');

class EmailTypes extends Model {
  static get tableName() {
    return 'email_types';
  }
}

module.exports = EmailTypes;
