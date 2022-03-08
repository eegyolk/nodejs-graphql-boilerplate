const SocialNetworksRepository = require('../../Repositories/SocialNetworksRepository');
const Utilities = require('../../Classes/Utilities');

const getSocialNetworksLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await SocialNetworksRepository.getSocialNetworks(ids, fields);
};

module.exports = {
  getSocialNetworksLoader,
};
