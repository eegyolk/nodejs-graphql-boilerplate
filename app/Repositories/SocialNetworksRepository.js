const SocialNetworks = require('../Models/SocialNetworks');

class SocialNetworksRepository {
  static async getSocialNetworks() {
    return await SocialNetworks.query();
  }

  static async getSocialNetwork(id) {
    return await SocialNetworks.query().findById(id);
  }
}

module.exports = SocialNetworksRepository;
