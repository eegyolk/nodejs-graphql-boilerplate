const fs = require('fs');

const files = fs.readdirSync(__dirname, { withFileTypes: true });
const loaders = {};

files.forEach((item) => {
  if (item.isDirectory()) {
    const loaderFile = `./${item.name}/loaders`;

    if (fs.existsSync(`${__dirname}/${loaderFile}.js`)) {
      Object.assign(loaders, require(`./${item.name}/loaders`));
    }
  }
});

module.exports = loaders;
