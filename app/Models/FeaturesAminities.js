const { Model } = require('objection');

class FeaturesAminities extends Model {
  static get tableName() {
    return 'features_amenities';
  }
}

module.exports = FeaturesAminities;
