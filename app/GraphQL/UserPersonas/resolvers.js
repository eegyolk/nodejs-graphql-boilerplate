const { GraphQLError } = require('graphql');

const UserPersonasRepository = require('../../Repositories/UserPersonasRepository');

const getUserPersonasResolver = async () => {
  const result = await UserPersonasRepository.getUserPersonas();

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

module.exports = {
  getUserPersonasResolver,
  getUserPersonaResolver,
};
