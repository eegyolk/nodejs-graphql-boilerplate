const UserSocialNetworksRepository = require('../../Repositories/UserSocialNetworksRepository');

const userSocialNetworksResolver = async () => {
  return await UserSocialNetworksRepository.userSocialNetworks();
};

const getUserSocialNetworkResolver = async (id) => {
  return await UserSocialNetworksRepository.getUserSocialNetwork(id);
};

const createUserSocialNetworkResolver = async (args) => {
  return await UserSocialNetworksRepository.createUserSocialNetwork(args.input);
};

module.exports = {
  userSocialNetworksResolver,
  getUserSocialNetworkResolver,
  createUserSocialNetworkResolver,
};
