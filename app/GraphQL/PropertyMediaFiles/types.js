const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');
const BigInt = require('graphql-bigint');

const propertyMediaFilesType = new GraphQLObjectType({
  name: 'PropertyMediaFiles',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    property_id: { type: new GraphQLNonNull(BigInt) },
    images_url: { type: new GraphQLNonNull(GraphQLString) },
    videos_url: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyMediaFilesType };
