const UsersRepository = require('../../Repositories/UsersRepository');

const getUsersResolver = async () => {
  const result = await UsersRepository.getUsers();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserResolver = async (id) => {
  const result = await UsersRepository.getUser(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

module.exports = {
  getUsersResolver,
  getUserResolver,
};
