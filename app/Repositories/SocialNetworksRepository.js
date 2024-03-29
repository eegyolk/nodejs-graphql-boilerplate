const { raw } = require('objection');

const SocialNetworks = require('../Models/SocialNetworks');

class SocialNetworksRepository {
  static async socialNetworks(fields) {
    return await SocialNetworks.query().select(raw(fields));
  }

  static async getSocialNetwork(id, fields) {
    return await SocialNetworks.query().select(raw(fields)).findById(id);
  }

  static async getSocialNetworks(ids, fields) {
    return await SocialNetworks.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createSocialNetwork(input) {
    const { code, label, description, is_default } = input;

    return await SocialNetworks.query().insert({
      code,
      label,
      description,
      is_default,
    });
  }
}

module.exports = SocialNetworksRepository;
