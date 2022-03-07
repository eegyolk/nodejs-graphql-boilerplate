const { GraphQLError } = require('graphql');

const UserAddressesRepository = require('../../Repositories/UserAddressesRepository');

const getUserAddressesResolvers = async () => {
  const result = await UserAddressesRepository.getUserAddresses();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserAddressResolvers = async (id) => {
  const result = await UserAddressesRepository.getUserAddress(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

module.exports = {
  getUserAddressesResolvers,
  getUserAddressResolvers,
};
