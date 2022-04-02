const { Model } = require('objection');

class FeatureAmenityTypes extends Model {
  static get tableName() {
    return 'feature_amenity_types';
  }
}

module.exports = FeatureAmenityTypes;
