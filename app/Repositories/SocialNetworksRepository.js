const SocialNetworks = require('../Models/SocialNetworks');

class SocialNetworksRepository {
  static async getSocialNetworks() {
    return await SocialNetworks.query();
  }

  static async getSocialNetwork(id) {
    return await SocialNetworks.query().findById(id);
  }

  static async createSocialNetwork(input) {
    const { code, label, description, is_default, logo_url } = input;

    return await SocialNetworks.query().insert({
      code,
      label,
      description,
      is_default,
      logo_url,
    });
  }
}

module.exports = SocialNetworksRepository;
