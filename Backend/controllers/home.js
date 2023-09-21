const { getHome } = require("../services/home");

function getParagHome(req, res) {
  try {
    const home = getHome();
    res.send(home);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getParagHome,
};
