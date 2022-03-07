const bcrypt = require('bcryptjs');

class PasswordHasher {
  static make(password) {
    const salt = bcrypt.genSaltSync();

    return bcrypt.hashSync(password, salt);
  }

  static check(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = PasswordHasher;
