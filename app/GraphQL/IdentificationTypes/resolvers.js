const graphqlFields = require('graphql-fields');

const IdentificationTypesRepository = require('../../Repositories/IdentificationTypesRepository');

const identificationTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await IdentificationTypesRepository.identificationTypes(
    fields.join(',')
  );
};

const getIdentificationTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await IdentificationTypesRepository.getIdentificationType(
    id,
    fields.join(',')
  );
};

const createIdentificationTypeResolver = async (args) => {
  return await IdentificationTypesRepository.createIdentificationType(
    args.input
  );
};

module.exports = {
  identificationTypesResolver,
  getIdentificationTypeResolver,
  createIdentificationTypeResolver,
};
