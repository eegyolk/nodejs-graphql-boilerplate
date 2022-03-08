const graphqlFields = require('graphql-fields');

const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');

const addressTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AddressTypesRepository.addressTypes(fields.join(','));
};

const getAddressTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AddressTypesRepository.getAddressType(id, fields.join(','));
};

const createAddressTypeResolver = async (args) => {
  return await AddressTypesRepository.createAddressType(args.input);
};

module.exports = {
  addressTypesResolver,
  getAddressTypeResolver,
  createAddressTypeResolver,
};
