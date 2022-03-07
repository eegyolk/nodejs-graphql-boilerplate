const { GraphQLError } = require('graphql');

const AddressTypesRepository = require('../../Repositories/AddressTypesRepository');

const getAddressTypesResolver = async () => {
  const result = await AddressTypesRepository.getAddressTypes();

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

module.exports = {
  getAddressTypesResolver,
  getAddressTypeResolver,
};
