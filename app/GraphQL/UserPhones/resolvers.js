const { GraphQLError } = require('graphql');

const UserPhonesRepository = require('../../Repositories/UserPhonesRepository');

const userPhonesResolver = async () => {
  const result = await UserPhonesRepository.userPhones();

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

const createUserPhoneResolver = async (args) => {
  return await UserPhonesRepository.createUserPhone(args.input);
};

module.exports = {
  userPhonesResolver,
  getUserPhoneResolver,
  createUserPhoneResolver,
};
