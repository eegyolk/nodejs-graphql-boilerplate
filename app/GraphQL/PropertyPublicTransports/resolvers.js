const graphqlFields = require('graphql-fields');

const PropertyPublicTransportsRepository = require('../../Repositories/PropertyPublicTransportsRepository');

const propertyPublicTransportsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyPublicTransportsRepository.propertyPublicTransports(
    fields.join(',')
  );
};

const getPropertyPublicTransportResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyPublicTransportsRepository.getPropertyPublicTransport(
    id,
    fields.join(',')
  );
};

const createPropertyPublicTransportResolver = async (args) => {
  return await PropertyPublicTransportsRepository.createPropertyPublicTransport(
    args.input
  );
};

module.exports = {
  propertyPublicTransportsResolver,
  getPropertyPublicTransportResolver,
  createPropertyPublicTransportResolver,
};
