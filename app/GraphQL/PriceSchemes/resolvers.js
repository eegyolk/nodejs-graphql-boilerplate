const graphqlFields = require('graphql-fields');

const PriceSchemesRepository = require('../../Repositories/PriceSchemesRepository');

const priceSchemesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemesRepository.priceSchemes(fields.join(','));
};

const getPriceSchemeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemesRepository.getPriceScheme(id, fields.join(','));
};

const createPriceSchemeResolver = async (args) => {
  return await PriceSchemesRepository.createPriceScheme(args.input);
};

module.exports = {
  priceSchemesResolver,
  getPriceSchemeResolver,
  createPriceSchemeResolver,
};
