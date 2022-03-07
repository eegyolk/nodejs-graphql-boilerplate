const UsersRepository = require('../../Repositories/UsersRepository');

const getUsersLoader = async (ids) => {
  return await UsersRepository.getUsers(ids);
};

module.exports = {
  getUsersLoader,
};
