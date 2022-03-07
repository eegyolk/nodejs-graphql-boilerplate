const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const createDeviceInputType = new GraphQLInputObjectType({
  name: 'CreateDeviceInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    ip_address: { type: new GraphQLNonNull(GraphQLString) },
    user_agent: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createDeviceInputType };
