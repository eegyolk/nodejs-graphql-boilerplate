const UserSocialNetworks = require('../Models/UserSocialNetworks');

class UserSocialNetworksRepository {
  static async userSocialNetworks() {
    return await UserSocialNetworks.query();
  }

  static async getUserSocialNetwork(id) {
    return await UserSocialNetworks.query().findById(id);
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
