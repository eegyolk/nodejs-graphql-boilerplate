const { GraphQLError } = require('graphql');

const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');

const addressTypesResolver = async () => {
  const result = await AddressTypesRepository.addressTypes();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getAddressTypeResolver = async (id) => {
  const result = await AddressTypesRepository.getAddressType(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const getAddressTypesResolver = async (ids) => {
  const result = await AddressTypesRepository.getAddressTypes(ids);

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createAddressTypeResolver = async (args) => {
  return await AddressTypesRepository.createAddressType(args.input);
};

module.exports = {
  addressTypesResolver,
  getAddressTypeResolver,
  getAddressTypesResolver,
  createAddressTypeResolver,
};
