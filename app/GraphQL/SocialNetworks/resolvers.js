const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');

const getSocialNetworksResolver = async () => {
  return await SocialNetworksRepository.getSocialNetworks();
};

const getSocialNetworkResolver = async (id) => {
  return await SocialNetworksRepository.getSocialNetwork(id);
};

module.exports = {
  getSocialNetworksResolver,
  getSocialNetworkResolver,
};
