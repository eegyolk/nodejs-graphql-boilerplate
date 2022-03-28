const { Model } = require('objection');

class PropertyLeaseDurations extends Model {
  static get tableName() {
    return 'property_lease_durations';
  }
}

module.exports = PropertyLeaseDurations;
