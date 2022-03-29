const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const propertyMediaFilesType = new GraphQLObjectType({
  name: 'PropertyMediaFiles',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    images_url: { type: new GraphQLNonNull(GraphQLString) },
    videos_url: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyMediaFilesType };
