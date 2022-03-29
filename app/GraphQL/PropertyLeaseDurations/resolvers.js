const graphqlFields = require('graphql-fields');

const PropertyLeaseDurationsRepository = require('../../Repositories/PropertyLeaseDurationsRepository');

const propertyLeaseDurationsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyLeaseDurationsRepository.propertyLeaseDurations(
    fields.join(',')
  );
};

const getPropertyLeaseDurationResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyLeaseDurationsRepository.getPropertyLeaseDuration(
    id,
    fields.join(',')
  );
};

const createPropertyLeaseDurationResolver = async (args) => {
  return await PropertyLeaseDurationsRepository.createPropertyLeaseDuration(
    args.input
  );
};

module.exports = {
  propertyLeaseDurationsResolver,
  getPropertyLeaseDurationResolver,
  createPropertyLeaseDurationResolver,
};
