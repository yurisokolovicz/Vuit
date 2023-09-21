const fs = require("fs");

function getIntro() {
  return JSON.parse(fs.readFileSync("intro.json"));
}

module.exports = {
  getIntro,
};
