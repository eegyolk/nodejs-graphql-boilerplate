const UsersRepository = require('../../Repositories/UsersRepository');

const usersResolver = async () => {
  return await UsersRepository.users();
};

const getUserResolver = async (id) => {
  return await UsersRepository.getUser(id);
};

const createUserResolver = async (args) => {
  return await UsersRepository.createUser(args.input);
};

module.exports = {
  usersResolver,
  getUserResolver,
  createUserResolver,
};
