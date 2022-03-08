const graphqlFields = require('graphql-fields');

const UserPersonasRepository = require('../../Repositories/UserPersonasRepository');

const userPersonasResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'persona'] })
  );

  return await UserPersonasRepository.userPersonas(fields.join(','));
};

const getUserPersonaResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'persona'] })
  );

  return await UserPersonasRepository.getUserPersona(id, fields.join(','));
};

const getUserPersonaIdByUserIdResolver = async (userId) => {
  return await UserPersonasRepository.getUserPersonaIdByUserId(userId);
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
