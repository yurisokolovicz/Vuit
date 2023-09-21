const fs = require("fs");

function getLista() {
  return JSON.parse(fs.readFileSync("lista.json"));
}

module.exports = {
  getLista,
};
