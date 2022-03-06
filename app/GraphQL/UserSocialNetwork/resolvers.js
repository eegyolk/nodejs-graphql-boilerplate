const UserSocialNetworksRepository = require('../../Repositories/UserSocialNetworksRepository');

const getUserSocialNetworksResolver = async () => {
  return await UserSocialNetworksRepository.getUserSocialNetworks();
};

const getUserSocialNetworkResolver = async (id) => {
  return await UserSocialNetworksRepository.getUserSocialNetwork(id);
};

module.exports = {
  getUserSocialNetworksResolver,
  getUserSocialNetworkResolver,
};
