const fs = require("fs");

function removeArchive(path) {
  const status = fs.unlinkSync(`${path}`, (err) => {
    if (err) throw err;
    return true;
  });
  return status;
}

module.exports = removeArchive;
