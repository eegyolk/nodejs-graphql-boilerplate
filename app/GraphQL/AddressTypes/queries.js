const { GraphQLList, GraphQLInt } = require('graphql');

const { addressTypesType } = require('./types'),
  { addressTypesResolver, getAddressTypeResolver } = require('./resolvers');

const addressTypes = {
  type: new GraphQLList(addressTypesType),
  resolve: async (source, args, context, info) =>
    await addressTypesResolver(info),
};

const getAddressType = {
  type: addressTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getAddressTypeResolver(args.id, info),
};

module.exports = {
  addressTypes,
  getAddressType,
};
