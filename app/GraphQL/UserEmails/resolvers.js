const { GraphQLError } = require('graphql');

const UserEmailsRepository = require('../../Repositories/UserEmailsRepository');

const getUserEmailsResolver = async () => {
  const result = await UserEmailsRepository.getUserEmails();

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

module.exports = {
  getUserEmailsResolver,
  getUserEmailResolver,
};
