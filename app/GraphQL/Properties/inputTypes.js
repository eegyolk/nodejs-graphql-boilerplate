const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

const { verificationStatusEnumType } = require('./enumTypes');

const createPropertyInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    unit_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    property_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    lot_area: { type: new GraphQLNonNull(GraphQLFloat) },
    floor_area: { type: new GraphQLNonNull(GraphQLFloat) },
    verification_status: {
      type: new GraphQLNonNull(verificationStatusEnumType),
    },
  },
});

module.exports = { createPropertyInputType };
