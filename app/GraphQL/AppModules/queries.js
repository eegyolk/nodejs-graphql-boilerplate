const { GraphQLList, GraphQLInt } = require('graphql');

const { appModulesType } = require('./types'),
  { appModulesResolver, getAppModuleResolver } = require('./resolvers');

const appModules = {
  type: new GraphQLList(appModulesType),
  resolve: async (source, args, context, info) =>
    await appModulesResolver(info),
};

const getAppModule = {
  type: appModulesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getAppModuleResolver(args.id, info),
};

module.exports = {
  appModules,
  getAppModule,
};
