const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { userPhonesType } = require('./types'),
  { userPhonesResolver, getUserPhoneResolver } = require('./resolvers');

const userPhones = {
  type: new GraphQLList(userPhonesType),
  resolve: async (source, args, context, info) =>
    await userPhonesResolver(info),
};

const getUserPhone = {
  type: userPhonesType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserPhoneResolver(args.id, info),
};

module.exports = {
  userPhones,
  getUserPhone,
};
