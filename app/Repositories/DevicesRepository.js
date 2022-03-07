const Devices = require('../Models/Devices');

class DevicesRepository {
  static async getDevices() {
    return await Devices.query();
  }

  static async getDevice(id) {
    return await Devices.query().findById(id);
  }

  static async createDevice(input) {
    const { user_id, ip_address, user_agent } = input;

    return await Devices.query().insert({
      user_id,
      ip_address,
      user_agent,
    });
  }
}

module.exports = DevicesRepository;
