const SocialNetworks = require('../../Models/SocialNetworks');

class SocialNetworksRepository {
  static async getSocialNetworks() {
    return await SocialNetworks.query();
  }
}

module.exports = SocialNetworksRepository;
