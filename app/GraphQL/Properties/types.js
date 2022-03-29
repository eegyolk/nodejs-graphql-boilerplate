const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

const { verificationStatusEnumType } = require('./enumTypes');

const propertiesType = new GraphQLObjectType({
  name: 'Properties',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
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
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertiesType };
