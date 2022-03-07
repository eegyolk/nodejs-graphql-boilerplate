const { GraphQLError } = require('graphql');

const UserSocialNetworksRepository = require('../../Repositories/UserSocialNetworksRepository');

const getUserSocialNetworksResolver = async () => {
  const result = await UserSocialNetworksRepository.getUserSocialNetworks();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserSocialNetworkResolver = async (id) => {
  const result = await UserSocialNetworksRepository.getUserSocialNetwork(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createUserSocialNetworkResolver = async (args) => {
  return await UserSocialNetworksRepository.createUserSocialNetwork(args.input);
};

module.exports = {
  getUserSocialNetworksResolver,
  getUserSocialNetworkResolver,
  createUserSocialNetworkResolver,
};
