const { GraphQLList, GraphQLInt } = require('graphql');

const { unitTypesType } = require('./types'),
  { unitTypesResolver, getUnitTypeResolver } = require('./resolvers');

const unitTypes = {
  type: new GraphQLList(unitTypesType),
  resolve: async (source, args, context, info) => await unitTypesResolver(info),
};

const getUnitType = {
  type: unitTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getUnitTypeResolver(args.id, info),
};

module.exports = {
  unitTypes,
  getUnitType,
};
