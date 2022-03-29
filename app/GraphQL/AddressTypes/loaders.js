const DataLoader = require('dataloader');

const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getAddressTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await AddressTypesRepository.getAddressTypes(ids, fields);
};

module.exports = {
  addressTypes: new DataLoader(getAddressTypesLoader),
};
