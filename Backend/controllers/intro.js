const { getIntro } = require("../services/intro");

function getIntroducao(req, res) {
  try {
    const intro = getIntro();
    res.send(intro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getIntroducao,
};
