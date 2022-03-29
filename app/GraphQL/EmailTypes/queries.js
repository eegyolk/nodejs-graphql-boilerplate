const { GraphQLList, GraphQLInt } = require('graphql');

const { emailTypesType } = require('./types'),
  { emailTypesResolver, getEmailTypeResolver } = require('./resolvers');

const emailTypes = {
  type: new GraphQLList(emailTypesType),
  resolve: async (source, args, context, info) =>
    await emailTypesResolver(info),
};

const getEmailType = {
  type: emailTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getEmailTypeResolver(args.id, info),
};

module.exports = {
  emailTypes,
  getEmailType,
};
