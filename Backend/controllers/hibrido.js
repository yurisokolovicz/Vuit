const { getHibrido } = require("../services/hibrido");

function getHib(req, res) {
  try {
    const hibrido = getHibrido();
    res.send(hibrido);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getHib,
};
