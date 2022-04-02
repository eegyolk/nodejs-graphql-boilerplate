const { Model } = require('objection');

class PropertyFeaturesAmenities extends Model {
  static get tableName() {
    return 'property_features_amenities';
  }
}

module.exports = PropertyFeaturesAmenities;
