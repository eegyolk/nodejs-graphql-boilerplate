const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { propertyMediaFilesType } = require('./types'),
  {
    propertyMediaFilesResolver,
    getPropertyMediaFileResolver,
  } = require('./resolvers');

const propertyMediaFiles = {
  type: new GraphQLList(propertyMediaFilesType),
  resolve: async (source, args, context, info) =>
    await propertyMediaFilesResolver(info),
};

const getPropertyMediaFile = {
  type: propertyMediaFilesType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyMediaFileResolver(args.id, info),
};

module.exports = {
  propertyMediaFiles,
  getPropertyMediaFile,
};
