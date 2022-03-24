const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const createPersonaIdentificationTypeInputType = new GraphQLInputObjectType({
  name: 'CreatePersonaIdentificationTypeInput',
  fields: {
    persona_id: { type: new GraphQLNonNull(GraphQLInt) },
    identification_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    is_required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createPersonaIdentificationTypeInputType };
