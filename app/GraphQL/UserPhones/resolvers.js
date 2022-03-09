const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const UserPhonesRepository = require('../../Repositories/UserPhonesRepository');

const userPhonesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserPhonesRepository.userPhones(fields.join(','));
};

const getUserPhoneResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

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
