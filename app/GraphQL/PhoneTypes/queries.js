const { GraphQLList, GraphQLInt } = require('graphql');

const { phoneTypesType } = require('./types'),
  { phoneTypesResolver, getPhoneTypeResolver } = require('./resolvers');

const phoneTypes = {
  type: new GraphQLList(phoneTypesType),
  resolve: async (source, args, context, info) =>
    await phoneTypesResolver(info),
};

const getPhoneType = {
  type: phoneTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPhoneTypeResolver(args.id, info),
};

module.exports = {
  phoneTypes,
  getPhoneType,
};
