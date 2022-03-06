const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');

const getAddressTypes = async () => {
  return await AddressTypesRepository.getAddressTypes();
};

module.exports = {
  getAddressTypes,
};
