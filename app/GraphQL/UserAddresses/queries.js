const { GraphQLList, GraphQLInt } = require('graphql');

const { userAddressesType } = require('./types'),
  { userAddressesResolver, getUserAddressResolver } = require('./resolvers');

const userAddresses = {
  type: new GraphQLList(userAddressesType),
  resolve: async (source, args, context, info) =>
    await userAddressesResolver(info),
};

const getUserAddress = {
  type: userAddressesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserAddressResolver(args.id, info),
};

module.exports = {
  userAddresses,
  getUserAddress,
};
