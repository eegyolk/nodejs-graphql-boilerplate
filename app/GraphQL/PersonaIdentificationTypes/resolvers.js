const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const PersonaIdentificationTypesRepository = require('../../Repositories/PersonaIdentificationTypesRepository');

const personaIdentificationTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await PersonaIdentificationTypesRepository.personaIdentificationTypes(
    fields.join(',')
  );
};

const getPersonaIdentificationTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await PersonaIdentificationTypesRepository.getPersonaIdentificationType(
    id,
    fields.join(',')
  );
};

const getPersonaIdentificationTypeIdByPersonaIdResolver = async (personaId) => {
  const result =
    await PersonaIdentificationTypesRepository.getPersonaIdentificationTypeByPersonaId(
      personaId
    );

  return result.map((item) => item.id);
};

const createPersonaIdentificationTypeResolver = async (args) => {
  return await PersonaIdentificationTypesRepository.createUserAddress(
    args.input
  );
};

module.exports = {
  personaIdentificationTypesResolver,
  getPersonaIdentificationTypeResolver,
  getPersonaIdentificationTypeIdByPersonaIdResolver,
  createPersonaIdentificationTypeResolver,
};
