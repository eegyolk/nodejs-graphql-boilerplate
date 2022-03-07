const PasswordHasher = require('../../Classes/PasswordHasher');
const UsersRepository = require('../../Repositories/UsersRepository');

const usersResolver = async () => {
  return await UsersRepository.users();
};

const getUserResolver = async (id) => {
  return await UsersRepository.getUser(id);
};

const createUserResolver = async (args) => {
  const { input } = args;
  const tempPassword = input.password;

  input.password = PasswordHasher.make(tempPassword);

  return await UsersRepository.createUser(input);
};

module.exports = {
  usersResolver,
  getUserResolver,
  createUserResolver,
};
