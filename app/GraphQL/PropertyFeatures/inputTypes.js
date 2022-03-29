const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');

const createPropertyFeatureInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyFeatureInput',
  fields: {
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    feature_id: { type: new GraphQLNonNull(GraphQLInt) },
    value: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPropertyFeatureInputType };
