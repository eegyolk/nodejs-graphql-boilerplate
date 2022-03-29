const { createPropertyMediaFileInputType } = require('./inputTypes'),
  { createPropertyMediaFileResolver } = require('./resolvers'),
  { propertyMediaFilesType } = require('./types');

const createPropertyMediaFile = {
  type: propertyMediaFilesType,
  args: {
    input: { type: createPropertyMediaFileInputType },
  },
  resolve: async (source, args) => await createPropertyMediaFileResolver(args),
};

module.exports = {
  createPropertyMediaFile,
};
