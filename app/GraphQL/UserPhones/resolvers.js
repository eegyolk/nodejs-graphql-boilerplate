const graphqlFields = require('graphql-fields');

const UserPhonesRepository = require('../../Repositories/UserPhonesRepository');

const userPhonesResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'phone_type'] })
  );

  return await UserPhonesRepository.userPhones(fields.join(','));
};

const getUserPhoneResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'phone_type'] })
  );

  return await UserPhonesRepository.getUserPhone(id, fields.join(','));
};

const getUserPhoneIdByUserIdResolver = async (userId) => {
  const result = await UserPhonesRepository.getUserPhoneIdByUserId(userId);

  return result.map((item) => item.id);
};

const createUserPhoneResolver = async (args) => {
  return await UserPhonesRepository.createUserPhone(args.input);
};

module.exports = {
  userPhonesResolver,
  getUserPhoneResolver,
  getUserPhoneIdByUserIdResolver,
  createUserPhoneResolver,
};
