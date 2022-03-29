const DataLoader = require('dataloader');

const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getPhoneTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PhoneTypesRepository.getPhoneTypes(ids, fields);
};

module.exports = {
  phoneTypes: new DataLoader(getPhoneTypesLoader),
};
