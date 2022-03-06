const UsersRepository = require('../../Repositories/UsersRepository');

const getUsers = async () => {
  return await UsersRepository.getUsers();
};

module.exports = {
  getUsers,
};
