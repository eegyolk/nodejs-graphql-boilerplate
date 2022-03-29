const { GraphQLList, GraphQLInt } = require('graphql');

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
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyVerificationResolver(args.id, info),
};

module.exports = {
  propertyVerifications,
  getPropertyVerification,
};
