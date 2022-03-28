const { Model } = require('objection');

class Amenities extends Model {
  static get tableName() {
    return 'amenities';
  }
}

module.exports = Amenities;
