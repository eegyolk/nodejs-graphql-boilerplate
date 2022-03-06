const UserSocialNetworks = require('../Models/UserSocialNetworks');

class UserSocialNetworksRepository {
  static async getUserSocialNetworks() {
    return await UserSocialNetworks.query();
  }
}

module.exports = UserSocialNetworksRepository;
