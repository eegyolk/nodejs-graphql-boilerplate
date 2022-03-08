const graphqlFields = require('graphql-fields');

const UserSocialNetworksRepository = require('../../Repositories/UserSocialNetworksRepository');

const userSocialNetworksResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'social_network'] })
  );

  return await UserSocialNetworksRepository.userSocialNetworks(
    fields.join(',')
  );
};

const getUserSocialNetworkResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'social_network'] })
  );

  return await UserSocialNetworksRepository.getUserSocialNetwork(
    id,
    fields.join(',')
  );
};

const createUserSocialNetworkResolver = async (args) => {
  return await UserSocialNetworksRepository.createUserSocialNetwork(args.input);
};

module.exports = {
  userSocialNetworksResolver,
  getUserSocialNetworkResolver,
  createUserSocialNetworkResolver,
};
