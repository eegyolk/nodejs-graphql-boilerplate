const UserSocialNetworks = require('../Models/UserSocialNetworks');

class UserSocialNetworksRepository {
  static async getUserSocialNetworks() {
    return await UserSocialNetworks.query();
  }

  static async getUserSocialNetwork(id) {
    return await UserSocialNetworks.query().findById(id);
  }
}

module.exports = UserSocialNetworksRepository;
