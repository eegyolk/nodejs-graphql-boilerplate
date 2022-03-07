const { Model } = require('objection');

class Devices extends Model {
  static get tableName() {
    return 'devices';
  }
}

module.exports = Devices;
