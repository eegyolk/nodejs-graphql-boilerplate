const { GraphQLError } = require('graphql');

const UserEmailsRepository = require('../../Repositories/UserEmailsRepository');

const userEmailsResolver = async () => {
  const result = await UserEmailsRepository.userEmails();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserEmailResolver = async (id) => {
  const result = await UserEmailsRepository.getUserEmail(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createUserEmailResolver = async (args) => {
  return await UserEmailsRepository.createUserEmail(args.input);
};

module.exports = {
  userEmailsResolver,
  getUserEmailResolver,
  createUserEmailResolver,
};
