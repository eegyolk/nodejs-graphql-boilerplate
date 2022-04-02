const { Model } = require('objection');

class AccommodationTypes extends Model {
  static get tableName() {
    return 'accommodation_types';
  }
}

module.exports = AccommodationTypes;
