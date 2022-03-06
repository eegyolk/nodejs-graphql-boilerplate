const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');

const getAddressTypesResolver = async () => {
  return await AddressTypesRepository.getAddressTypes();
};

const getAddressTypeResolver = async (id) => {
  return await AddressTypesRepository.getAddressType(id);
};

module.exports = {
  getAddressTypesResolver,
  getAddressTypeResolver,
};
