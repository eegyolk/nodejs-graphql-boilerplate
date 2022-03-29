const graphqlFields = require('graphql-fields');

const PropertyAddressesRepository = require('../../Repositories/PropertyAddressesRepository');

const propertyAddressesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyAddressesRepository.propertyAddresses(fields.join(','));
};

const getPropertyAddressResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyAddressesRepository.getPropertyAddress(
    id,
    fields.join(',')
  );
};

const createPropertyAddressResolver = async (args) => {
  return await PropertyAddressesRepository.createPropertyAddress(args.input);
};

module.exports = {
  propertyAddressesResolver,
  getPropertyAddressResolver,
  createPropertyAddressResolver,
};
