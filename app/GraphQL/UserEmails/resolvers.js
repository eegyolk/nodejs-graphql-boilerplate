const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const UserEmailsRepository = require('../../Repositories/UserEmailsRepository');

const userEmailsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserEmailsRepository.userEmails(fields.join(','));
};

const getUserEmailResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserEmailsRepository.getUserEmail(id, fields.join(','));
};

const getUserEmailIdByUserIdResolver = async (userId) => {
  const result = await UserEmailsRepository.getUserEmailIdByUserId(userId);

  return result.map((item) => item.id);
};

const createUserEmailResolver = async (args) => {
  return await UserEmailsRepository.createUserEmail(args.input);
};

module.exports = {
  userEmailsResolver,
  getUserEmailResolver,
  getUserEmailIdByUserIdResolver,
  createUserEmailResolver,
};
