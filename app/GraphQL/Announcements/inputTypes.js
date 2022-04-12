const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createAnnouncementInputType = new GraphQLInputObjectType({
  name: 'CreateAnnouncementInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    starts_at: { type: GraphQLString },
    ends_at: { type: GraphQLString },
  },
});

module.exports = { createAnnouncementInputType };
