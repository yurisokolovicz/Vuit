const fs = require("fs");

function getHibrido() {
  return JSON.parse(fs.readFileSync("hibrido.json"));
}

module.exports = {
  getHibrido,
};
