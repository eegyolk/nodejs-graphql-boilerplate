const { GraphQLEnumType } = require('graphql');

const subTypesEnumType = new GraphQLEnumType({
  name: 'SubTypesEnum',
  values: {
    MOBILE: { value: 'MOBILE' },
    LANDLINE: { value: 'LANDLINE' },
  },
});

module.exports = { subTypesEnumType };
