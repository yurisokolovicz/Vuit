const fs = require("fs");

function getRetangulo() {
  return JSON.parse(fs.readFileSync("retangulo.json"));
}

module.exports = {
  getRetangulo,
};
