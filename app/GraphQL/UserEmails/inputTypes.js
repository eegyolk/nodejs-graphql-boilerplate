const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createUserEmailInputType = new GraphQLInputObjectType({
  name: 'CreateUserEmailInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    email_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    email_address: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createUserEmailInputType };
