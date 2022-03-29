const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

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
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyResolver(args.id, info),
};

module.exports = {
  properties,
  getProperty,
};
