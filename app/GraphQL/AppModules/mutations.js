const { createAppModuleInputType } = require('./inputTypes'),
  { createAppModuleResolver } = require('./resolvers'),
  { appModulesType } = require('./types');

const createAppModule = {
  type: appModulesType,
  args: {
    input: { type: createAppModuleInputType },
  },
  resolve: async (source, args) => await createAppModuleResolver(args),
};

module.exports = {
  createAppModule,
};
