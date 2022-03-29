const graphqlFields = require('graphql-fields');

const UnitTypesRepository = require('../../Repositories/UnitTypesRepository');

const unitTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await UnitTypesRepository.unitTypes(fields.join(','));
};

const getUnitTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await UnitTypesRepository.getUnitType(id, fields.join(','));
};

const createUnitTypeResolver = async (args) => {
  return await UnitTypesRepository.createUnitType(args.input);
};

module.exports = {
  unitTypesResolver,
  getUnitTypeResolver,
  createUnitTypeResolver,
};
