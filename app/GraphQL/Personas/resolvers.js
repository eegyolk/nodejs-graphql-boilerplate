const { GraphQLError } = require('graphql');

const PersonasRepository = require('../../Repositories/PersonasRepository');

const personasResolver = async () => {
  const result = await PersonasRepository.personas();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getPersonaResolver = async (id) => {
  const result = await PersonasRepository.getPersona(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const getPersonasResolver = async (ids) => {
  const result = await PersonasRepository.getPersonas(ids);

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createPersonaResolver = async (args) => {
  return await PersonasRepository.createPersona(args.input);
};

module.exports = {
  personasResolver,
  getPersonaResolver,
  getPersonasResolver,
  createPersonaResolver,
};
