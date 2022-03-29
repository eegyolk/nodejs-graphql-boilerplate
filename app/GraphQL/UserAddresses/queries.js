const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

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
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserAddressResolver(args.id, info),
};

module.exports = {
  userAddresses,
  getUserAddress,
};
