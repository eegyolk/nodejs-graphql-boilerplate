const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const UserIdentificationsRepository = require('../../Repositories/UserIdentificationsRepository');

const userIdentificationsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserIdentificationsRepository.userIdentifications(
    fields.join(',')
  );
};

const getUserIdentificationResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserIdentificationsRepository.getUserIdentification(
    id,
    fields.join(',')
  );
};

const getUserIdentificationIdByUserIdResolver = async (userId) => {
  const result =
    await UserIdentificationsRepository.getUserIdentificationIdByUserId(userId);

  return result.map((item) => item.id);
};

const createUserIdentificationResolver = async (args) => {
  return await UserIdentificationsRepository.createUserIdentification(
    args.input
  );
};

module.exports = {
  userIdentificationsResolver,
  getUserIdentificationResolver,
  getUserIdentificationIdByUserIdResolver,
  createUserIdentificationResolver,
};
