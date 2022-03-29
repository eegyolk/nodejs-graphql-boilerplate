const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { userIdentificationsType } = require('./types'),
  {
    userIdentificationsResolver,
    getUserIdentificationResolver,
  } = require('./resolvers');

const userIdentifications = {
  type: new GraphQLList(userIdentificationsType),
  resolve: async (source, args, context, info) =>
    await userIdentificationsResolver(info),
};

const getUserIdentification = {
  type: userIdentificationsType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserIdentificationResolver(args.id, info),
};

module.exports = {
  userIdentifications,
  getUserIdentification,
};
