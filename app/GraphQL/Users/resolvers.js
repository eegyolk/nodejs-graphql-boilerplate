const UsersRepository = require('../../Repositories/UsersRepository');

const getUsersResolver = async () => {
  return await UsersRepository.getUsers();
};

const getUserResolver = async (id) => {
  return await UsersRepository.getUser(id);
};

module.exports = {
  getUsersResolver,
  getUserResolver,
};
