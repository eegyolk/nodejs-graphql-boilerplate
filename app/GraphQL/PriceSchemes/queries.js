const { GraphQLList, GraphQLInt } = require('graphql');

const { priceSchemesType } = require('./types'),
  { priceSchemesResolver, getPriceSchemeResolver } = require('./resolvers');

const priceSchemes = {
  type: new GraphQLList(priceSchemesType),
  resolve: async (source, args, context, info) =>
    await priceSchemesResolver(info),
};

const getPriceScheme = {
  type: priceSchemesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPriceSchemeResolver(args.id, info),
};

module.exports = {
  priceSchemes,
  getPriceScheme,
};
