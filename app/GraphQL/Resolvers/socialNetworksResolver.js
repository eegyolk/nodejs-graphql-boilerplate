const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');

const getSocialNetworks = async () => {
  return await SocialNetworksRepository.getSocialNetworks();
};

module.exports = {
  getSocialNetworks,
};
