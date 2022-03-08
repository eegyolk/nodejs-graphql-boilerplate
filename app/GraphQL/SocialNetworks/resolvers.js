const graphqlFields = require('graphql-fields');

const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');

const socialNetworksResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SocialNetworksRepository.socialNetworks(fields.join(','));
};

const getSocialNetworkResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SocialNetworksRepository.getSocialNetwork(id, fields.join(','));
};

const createSocialNetworkResolver = async (args) => {
  return await SocialNetworksRepository.createSocialNetwork(args.input);
};

module.exports = {
  socialNetworksResolver,
  getSocialNetworkResolver,
  createSocialNetworkResolver,
};
