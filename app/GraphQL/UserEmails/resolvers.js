const graphqlFields = require('graphql-fields');

const UserEmailsRepository = require('../../Repositories/UserEmailsRepository');

const userEmailsResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'email_type'] })
  );

  return await UserEmailsRepository.userEmails(fields.join(','));
};

const getUserEmailResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'email_type'] })
  );

  return await UserEmailsRepository.getUserEmail(id, fields.join(','));
};

const createUserEmailResolver = async (args) => {
  return await UserEmailsRepository.createUserEmail(args.input);
};

module.exports = {
  userEmailsResolver,
  getUserEmailResolver,
  createUserEmailResolver,
};
