class Utilities {
  static extractIdsAndFields(idsAndFields) {
    const ids = [];
    let fields = '';

    idsAndFields.forEach((item) => {
      ids.push(item.split('@')[0]);

      if (typeof item.split('@')[1] === 'string' && !fields) {
        fields = item.split('@')[1];
      }
    });

    return {
      ids,
      fields,
    };
  }
}

module.exports = Utilities;
