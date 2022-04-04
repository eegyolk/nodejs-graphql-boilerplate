const graphqlFields = require('graphql-fields');

const PublicTransportsRepository = require('../../Repositories/PublicTransportsRepository');

const publicTransportsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PublicTransportsRepository.publicTransports(fields.join(','));
};

const getPublicTransportResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PublicTransportsRepository.getPublicTransport(
    id,
    fields.join(',')
  );
};

const creatPublicTransportResolver = async (args) => {
  return await PublicTransportsRepository.creatPublicTransport(args.input);
};

module.exports = {
  publicTransportsResolver,
  getPublicTransportResolver,
  creatPublicTransportResolver,
};
