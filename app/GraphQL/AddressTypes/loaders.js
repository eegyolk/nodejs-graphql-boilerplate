const DataLoader = require('dataloader');

const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');

const getAddressTypesLoader = async (ids) => {
  return await AddressTypesRepository.getAddressTypes(ids);
};

module.exports = {
  addressTypes: new DataLoader(getAddressTypesLoader),
};
