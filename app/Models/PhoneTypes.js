const { Model } = require('objection');

class PhoneTypes extends Model {
  static get tableName() {
    return 'phone_types';
  }
}

module.exports = PhoneTypes;
