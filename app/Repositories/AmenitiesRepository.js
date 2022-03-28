const { raw } = require('objection');

const Amenities = require('../Models/Amenities');

class AmenitiesRepository {
  static async amenities(fields) {
    return await Amenities.query().select(raw(fields));
  }

  static async getAmenity(id, fields) {
    return await Amenities.query().select(raw(fields)).findById(id);
  }

  static async getAmenities(ids, fields) {
    return await Amenities.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createAmenity(input) {
    const { code, label, description } = input;

    return await Amenities.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = AmenitiesRepository;
