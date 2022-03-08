const UsersRepository = require('../../Repositories/UsersRepository');
const Utilities = require('../../Classes/Utilities');

const getUsersLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await UsersRepository.getUsers(ids, fields);
};

module.exports = {
  getUsersLoader,
};
