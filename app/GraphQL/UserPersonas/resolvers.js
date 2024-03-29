const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const UserPersonasRepository = require('../../Repositories/UserPersonasRepository');

const userPersonasResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserPersonasRepository.userPersonas(fields.join(','));
};

const getUserPersonaResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserPersonasRepository.getUserPersona(id, fields.join(','));
};

const getUserPersonaIdByUserIdResolver = async (userId) => {
  const result = await UserPersonasRepository.getUserPersonaIdByUserId(userId);

  return result.map((item) => item.id);
};

const createUserPersonaResolver = async (args) => {
  return await UserPersonasRepository.createUserPersona(args.input);
};

module.exports = {
  userPersonasResolver,
  getUserPersonaResolver,
  getUserPersonaIdByUserIdResolver,
  createUserPersonaResolver,
};
