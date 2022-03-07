const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');

const addressTypesResolver = async () => {
  return await AddressTypesRepository.addressTypes();
};

const getAddressTypeResolver = async (id) => {
  return await AddressTypesRepository.getAddressType(id);
};

const createAddressTypeResolver = async (args) => {
  return await AddressTypesRepository.createAddressType(args.input);
};

module.exports = {
  addressTypesResolver,
  getAddressTypeResolver,
  createAddressTypeResolver,
};
