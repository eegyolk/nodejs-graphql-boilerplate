const graphqlFields = require('graphql-fields');

const PersonasRepository = require('../../Repositories/PersonasRepository');

const personasResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PersonasRepository.personas(fields.join(','));
};

const getPersonaResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PersonasRepository.getPersona(id, fields.join(','));
};

const createPersonaResolver = async (args) => {
  return await PersonasRepository.createPersona(args.input);
};

module.exports = {
  personasResolver,
  getPersonaResolver,
  createPersonaResolver,
};
