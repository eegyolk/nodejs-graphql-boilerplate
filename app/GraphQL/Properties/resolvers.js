const graphqlFields = require('graphql-fields');

const PropertiesRepository = require('../../Repositories/PropertiesRepository');

const propertiesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertiesRepository.properties(fields.join(','));
};

const getPropertyResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertiesRepository.getProperty(id, fields.join(','));
};

const createPropertyResolver = async (args) => {
  return await PropertiesRepository.createProperty(args.input);
};

module.exports = {
  propertiesResolver,
  getPropertyResolver,
  createPropertyResolver,
};
