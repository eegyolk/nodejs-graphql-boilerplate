const DataLoader = require('dataloader');

const PublicTransportsRepository = require('../../Repositories/PublicTransportsRepository');
const Utilities = require('../../Classes/Utilities');

const getPublicTransportsLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PublicTransportsRepository.getPublicTransports(ids, fields);
};

module.exports = {
  publicTransports: new DataLoader(getPublicTransportsLoader),
};
