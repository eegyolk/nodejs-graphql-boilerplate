const DataLoader = require('dataloader');

const FeatureAmenityTypesRepository = require('../../Repositories/FeatureAmenityTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getFeatureAmenityTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await FeatureAmenityTypesRepository.getFeatureAmenityTypes(
    ids,
    fields
  );
};

module.exports = {
  featureAmenityTypes: new DataLoader(getFeatureAmenityTypesLoader),
};
