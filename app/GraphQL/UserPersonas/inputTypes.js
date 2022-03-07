const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const createUserPersonaInputType = new GraphQLInputObjectType({
  name: 'CreateUserPersonaInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    persona_id: { type: new GraphQLNonNull(GraphQLInt) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createUserPersonaInputType };
