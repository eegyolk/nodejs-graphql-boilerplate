const graphqlFields = require('graphql-fields');

const PasswordHasher = require('../../Classes/PasswordHasher');
const UsersRepository = require('../../Repositories/UsersRepository');

const usersResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(
      info,
      {},
      { excludedFields: ['userAddressIds', 'userEmailIds', 'userPhoneIds'] }
    )
  );

  return await UsersRepository.users(fields.join(','));
};

const getUserResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await UsersRepository.getUser(id, fields.join(','));
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
