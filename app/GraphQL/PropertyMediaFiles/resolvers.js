const graphqlFields = require('graphql-fields');

const PropertyMediaFilesRepository = require('../../Repositories/PropertyMediaFilesRepository');

const propertyMediaFilesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyMediaFilesRepository.propertyMediaFiles(
    fields.join(',')
  );
};

const getPropertyMediaFileResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyMediaFilesRepository.getPropertyMediaFile(
    id,
    fields.join(',')
  );
};

const createPropertyMediaFileResolver = async (args) => {
  return await PropertyMediaFilesRepository.createPropertyMediaFile(args.input);
};

module.exports = {
  propertyMediaFilesResolver,
  getPropertyMediaFileResolver,
  createPropertyMediaFileResolver,
};
