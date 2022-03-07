const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');

const getSocialNetworksLoader = async (ids) => {
  return await SocialNetworksRepository.getSocialNetworks(ids);
};

module.exports = {
  getSocialNetworksLoader,
};
