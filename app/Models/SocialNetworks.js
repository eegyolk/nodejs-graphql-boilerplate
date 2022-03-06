const { Model } = require('objection');

class SocialNetworks extends Model {
  static get tableName() {
    return 'social_networks';
  }
}

module.exports = SocialNetworks;
