const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');

const socialNetworksResolver = async () => {
  return await SocialNetworksRepository.socialNetworks();
};

const getSocialNetworkResolver = async (id) => {
  return await SocialNetworksRepository.getSocialNetwork(id);
};

const createSocialNetworkResolver = async (args) => {
  return await SocialNetworksRepository.createSocialNetwork(args.input);
};

module.exports = {
  socialNetworksResolver,
  getSocialNetworkResolver,
  createSocialNetworkResolver,
};
