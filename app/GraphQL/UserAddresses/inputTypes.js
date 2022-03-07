const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createUserAddressInputType = new GraphQLInputObjectType({
  name: 'CreateUserAddressInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    address_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    address_line_1: { type: new GraphQLNonNull(GraphQLString) },
    address_line_2: { type: new GraphQLNonNull(GraphQLString) },
    barangay: { type: new GraphQLNonNull(GraphQLString) },
    city_town: { type: new GraphQLNonNull(GraphQLString) },
    state_province: { type: new GraphQLNonNull(GraphQLString) },
    postal_code: { type: new GraphQLNonNull(GraphQLString) },
    country: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createUserAddressInputType };
