const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const createPropertyVerificationInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyVerificationInput',
  fields: {
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    remarks: { type: new GraphQLNonNull(GraphQLString) },
    notes: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPropertyVerificationInputType };
