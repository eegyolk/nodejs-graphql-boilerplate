const { GraphQLError } = require('graphql');

const UsersRepository = require('../../Repositories/UsersRepository');

const usersResolver = async () => {
  const result = await UsersRepository.users();

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

const getUsersResolver = async (ids) => {
  const result = await UsersRepository.getUsers(ids);

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createUserResolver = async (args) => {
  return await UsersRepository.createUser(args.input);
};

module.exports = {
  usersResolver,
  getUserResolver,
  getUsersResolver,
  createUserResolver,
};
