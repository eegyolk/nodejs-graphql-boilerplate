const { GraphQLError } = require('graphql');

const UserPersonasRepository = require('../../Repositories/UserPersonasRepository');

const userPersonasResolver = async () => {
  const result = await UserPersonasRepository.userPersonas();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserPersonaResolver = async (id) => {
  const result = await UserPersonasRepository.getUserPersona(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createUserPersonaResolver = async (args) => {
  return await UserPersonasRepository.createUserPersona(args.input);
};

module.exports = {
  userPersonasResolver,
  getUserPersonaResolver,
  createUserPersonaResolver,
};
