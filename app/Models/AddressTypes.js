const { Model } = require('objection');

class AddressTypes extends Model {
  static get tableName() {
    return 'address_types';
  }

  static get relationMappings() {
    const UserAddresses = require('./UserAddresses');

    return {
      userAddresses: {
        relation: Model.HasManyRelation,
        modelClass: UserAddresses,
        join: {
          from: `${this.tableName}.id`,
          to: `${UserAddresses.tableName}.address_type_id`,
        },
      },
    };
  }
}

module.exports = AddressTypes;
