const { GraphQLList, GraphQLInt } = require('graphql');

const { propertyAddressesType } = require('./types'),
  {
    propertyAddressesResolver,
    getPropertyAddressResolver,
  } = require('./resolvers');

const propertyAddresses = {
  type: new GraphQLList(propertyAddressesType),
  resolve: async (source, args, context, info) =>
    await propertyAddressesResolver(info),
};

const getPropertyAddress = {
  type: propertyAddressesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyAddressResolver(args.id, info),
};

module.exports = {
  propertyAddresses,
  getPropertyAddress,
};
