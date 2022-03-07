const { GraphQLError } = require('graphql');

const UserAddressesRepository = require('../../Repositories/UserAddressesRepository');

const userAddressesResolver = async () => {
  const result = await UserAddressesRepository.userAddresses();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserAddressResolver = async (id) => {
  const result = await UserAddressesRepository.getUserAddress(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createUserAddressResolver = async (args) => {
  return await UserAddressesRepository.createUserAddress(args.input);
};

module.exports = {
  userAddressesResolver,
  getUserAddressResolver,
  createUserAddressResolver,
};
