const UserSocialNetworksRepository = require('../../Repositories/UserSocialNetworksRepository');

const getUserSocialNetworks = async () => {
  return await UserSocialNetworksRepository.getUserSocialNetworks();
};

module.exports = {
  getUserSocialNetworks,
};
