const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const createPropertyMediaFileInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyMediaFileInput',
  fields: {
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    images_url: { type: new GraphQLNonNull(GraphQLString) },
    videos_url: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPropertyMediaFileInputType };
