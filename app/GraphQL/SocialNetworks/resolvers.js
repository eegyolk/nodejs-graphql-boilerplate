const { GraphQLError } = require('graphql');

const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');

const socialNetworksResolver = async () => {
  const result = await SocialNetworksRepository.socialNetworks();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getSocialNetworkResolver = async (id) => {
  const result = await SocialNetworksRepository.getSocialNetwork(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const getSocialNetworksResolver = async (ids) => {
  const result = await SocialNetworksRepository.getSocialNetworks(ids);

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createSocialNetworkResolver = async (args) => {
  return await SocialNetworksRepository.createSocialNetwork(args.input);
};

module.exports = {
  socialNetworksResolver,
  getSocialNetworkResolver,
  getSocialNetworksResolver,
  createSocialNetworkResolver,
};
