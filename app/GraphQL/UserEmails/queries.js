const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { userEmailsType } = require('./types'),
  { userEmailsResolver, getUserEmailResolver } = require('./resolvers');

const userEmails = {
  type: new GraphQLList(userEmailsType),
  resolve: async (source, args, context, info) =>
    await userEmailsResolver(info),
};

const getUserEmail = {
  type: userEmailsType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserEmailResolver(args.id, info),
};

module.exports = {
  userEmails,
  getUserEmail,
};
