const { raw } = require('objection');

const UserSocialNetworks = require('../Models/UserSocialNetworks');

class UserSocialNetworksRepository {
  static async userSocialNetworks(fields) {
    return await UserSocialNetworks.query().select(raw(fields));
  }

  static async getUserSocialNetwork(id, fields) {
    return await UserSocialNetworks.query().select(raw(fields)).findById(id);
  }

  static async getUserSocialNetworkIdByUserId(userId) {
    return await UserSocialNetworks.query()
      .select('id')
      .where('user_id', userId);
  }

  static async createUserSocialNetwork(input) {
    const { user_id, social_network_id, url, is_default, rank } = input;

    return await UserSocialNetworks.query().insert({
      user_id,
      social_network_id,
      url,
      is_default,
      rank,
    });
  }
}

module.exports = UserSocialNetworksRepository;
