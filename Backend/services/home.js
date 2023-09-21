const fs = require("fs");

function getHome() {
  return JSON.parse(fs.readFileSync("home.json"));
}

module.exports = {
  getHome,
};
