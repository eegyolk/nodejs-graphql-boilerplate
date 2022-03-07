const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createUserPhoneInputType = new GraphQLInputObjectType({
  name: 'CreateUserPhoneInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    phone_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    number: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createUserPhoneInputType };
