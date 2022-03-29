const graphqlFields = require('graphql-fields');

const PropertyTypesRepository = require('../../Repositories/PropertyTypesRepository');

const propertyTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyTypesRepository.propertyTypes(fields.join(','));
};

const getPropertyTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyTypesRepository.getPropertyType(id, fields.join(','));
};

const createPropertyTypeResolver = async (args) => {
  return await PropertyTypesRepository.createPropertyType(args.input);
};

module.exports = {
  propertyTypesResolver,
  getPropertyTypeResolver,
  createPropertyTypeResolver,
};
