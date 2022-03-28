const { Model } = require('objection');

class PropertyAmenities extends Model {
  static get tableName() {
    return 'property_amenities';
  }
}

module.exports = PropertyAmenities;
