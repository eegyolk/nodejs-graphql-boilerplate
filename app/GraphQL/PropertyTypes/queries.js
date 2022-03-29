const { GraphQLList, GraphQLInt } = require('graphql');

const { propertyTypesType } = require('./types'),
  { propertyTypesResolver, getPropertyTypeResolver } = require('./resolvers');

const propertyTypes = {
  type: new GraphQLList(propertyTypesType),
  resolve: async (source, args, context, info) =>
    await propertyTypesResolver(info),
};

const getPropertyType = {
  type: propertyTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyTypeResolver(args.id, info),
};

module.exports = {
  propertyTypes,
  getPropertyType,
};
