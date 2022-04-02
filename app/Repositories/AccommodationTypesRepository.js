const { raw } = require('objection');

const AccommodationTypes = require('../Models/AccommodationTypes');

class AccommodationTypesRepository {
  static async accommodationTypes(fields) {
    return await AccommodationTypes.query().select(raw(fields));
  }

  static async getAccommodationType(id, fields) {
    return await AccommodationTypes.query().select(raw(fields)).findById(id);
  }

  static async getAccommodationTypes(ids, fields) {
    return await AccommodationTypes.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async creatAccommodationType(input) {
    const { code, label, description } = input;

    return await AccommodationTypes.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = AccommodationTypesRepository;
