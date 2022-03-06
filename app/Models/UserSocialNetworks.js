const { Model } = require('objection');

class UserSocialNetworks extends Model {
  static get tableName() {
    return 'user_social_networks';
  }
}

module.exports = UserSocialNetworks;
