const graphqlFields = require('graphql-fields');

const PropertyUtilitiesRepository = require('../../Repositories/PropertyUtilitiesRepository');

const propertyUtilitiesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyUtilitiesRepository.propertyUtilities(fields.join(','));
};

const getPropertyUtilityResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyUtilitiesRepository.getPropertyUtility(
    id,
    fields.join(',')
  );
};

const createPropertyUtilityResolver = async (args) => {
  return await PropertyUtilitiesRepository.createPropertyUtility(args.input);
};

module.exports = {
  propertyUtilitiesResolver,
  getPropertyUtilityResolver,
  createPropertyUtilityResolver,
};
