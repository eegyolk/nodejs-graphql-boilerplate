const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { propertyVerificationsType } = require('./types'),
  {
    propertyVerificationsResolver,
    getPropertyVerificationResolver,
  } = require('./resolvers');

const propertyVerifications = {
  type: new GraphQLList(propertyVerificationsType),
  resolve: async (source, args, context, info) =>
    await propertyVerificationsResolver(info),
};

const getPropertyVerification = {
  type: propertyVerificationsType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyVerificationResolver(args.id, info),
};

module.exports = {
  propertyVerifications,
  getPropertyVerification,
};
