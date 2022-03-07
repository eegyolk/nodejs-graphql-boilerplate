const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');

const getSocialNetworksResolver = async () => {
  return await SocialNetworksRepository.getSocialNetworks();
};

const getSocialNetworkResolver = async (id) => {
  return await SocialNetworksRepository.getSocialNetwork(id);
};

const createSocialNetworkResolver = async (args) => {
  return await SocialNetworksRepository.createSocialNetwork(args.input);
};

module.exports = {
  getSocialNetworksResolver,
  getSocialNetworkResolver,
  createSocialNetworkResolver,
};
