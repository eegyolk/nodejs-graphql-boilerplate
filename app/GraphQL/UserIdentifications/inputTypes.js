const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createUserIdentificationInputType = new GraphQLInputObjectType({
  name: 'CreateUserIdentificationInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    identification_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    images_url: { type: new GraphQLNonNull(GraphQLString) },
    identification_number: { type: new GraphQLNonNull(GraphQLString) },
    expiration_date: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createUserIdentificationInputType };
