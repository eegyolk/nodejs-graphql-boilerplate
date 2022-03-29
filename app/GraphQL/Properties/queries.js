const { GraphQLList, GraphQLInt } = require('graphql');

const { propertiesType } = require('./types'),
  { propertiesResolver, getPropertyResolver } = require('./resolvers');

const properties = {
  type: new GraphQLList(propertiesType),
  resolve: async (source, args, context, info) =>
    await propertiesResolver(info),
};

const getProperty = {
  type: propertiesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyResolver(args.id, info),
};

module.exports = {
  properties,
  getProperty,
};
