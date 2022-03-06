const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

class UserAddressesQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'UserAddresses',
      fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        address_type_id: { type: GraphQLInt },
        address_line_1: { type: GraphQLString },
        address_line_2: { type: GraphQLString },
        barangay: { type: GraphQLString },
        city_town: { type: GraphQLString },
        state_province: { type: GraphQLString },
        postal_code: { type: GraphQLString },
        country: { type: GraphQLString },
        is_default: { type: GraphQLBoolean },
        rank: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = UserAddressesQuery;
