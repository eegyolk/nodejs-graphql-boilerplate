const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const PasswordHasher = require('../../Classes/PasswordHasher');
const UsersRepository = require('../../Repositories/UsersRepository');

const usersResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(
      info,
      {},
      {
        excludedFields,
      }
    )
  );

  return await UsersRepository.users(fields.join(','));
};

const getUserResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(
      info,
      {},
      {
        excludedFields,
      }
    )
  );

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
