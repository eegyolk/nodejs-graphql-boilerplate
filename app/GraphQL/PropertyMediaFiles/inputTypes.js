const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyMediaFileInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyMediaFileInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    images_url: { type: new GraphQLNonNull(GraphQLString) },
    videos_url: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPropertyMediaFileInputType };
