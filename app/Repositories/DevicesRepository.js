const { raw } = require('objection');

const Devices = require('../Models/Devices');

class DevicesRepository {
  static async devices(fields) {
    return await Devices.query().select(raw(fields));
  }

  static async getDevice(id, fields) {
    return await Devices.query().select(raw(fields)).findById(id);
  }

  static async getDevices(ids, fields) {
    return await Devices.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createDevice(input) {
    const { user_id, ip_address, user_agent, user_agent_md5 } = input;

    return await Devices.query().insert({
      user_id,
      ip_address,
      user_agent,
      user_agent_md5,
    });
  }
}

module.exports = DevicesRepository;
