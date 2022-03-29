const graphqlFields = require('graphql-fields');

const PropertyVerificationsRepository = require('../../Repositories/PropertyVerificationsRepository');

const propertyVerificationsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyVerificationsRepository.propertyVerifications(
    fields.join(',')
  );
};

const getPropertyVerificationResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyVerificationsRepository.getPropertyVerification(
    id,
    fields.join(',')
  );
};

const createPropertyVerificationResolver = async (args) => {
  return await PropertyVerificationsRepository.createPropertyVerification(
    args.input
  );
};

module.exports = {
  propertyVerificationsResolver,
  getPropertyVerificationResolver,
  createPropertyVerificationResolver,
};
