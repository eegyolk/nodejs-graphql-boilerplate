const { GraphQLError } = require('graphql');

const UserPhonesRepository = require('../../Repositories/UserPhonesRepository');

const getUserPhonesResolver = async () => {
  const result = await UserPhonesRepository.getUserPhones();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserPhoneResolver = async (id) => {
  const result = await UserPhonesRepository.getUserPhone(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

module.exports = {
  getUserPhonesResolver,
  getUserPhoneResolver,
};
