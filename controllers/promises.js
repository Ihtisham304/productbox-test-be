const { getTitle } = require("../services/title");
const { apiResponse } = require("../utils/response");
const { all } = require("rsvp");

const gettingTitlesUsingPromises = (req, res) => {
  const addresses = req.query.address;
  if (!addresses) {
    return res.status(400).send("<h1>No addresses provided</h1>");
  }

  const addressList = Array.isArray(addresses) ? addresses : [addresses];
  const promises = addressList.map((address) => getTitle(address));

  all(promises)
    .then((titles) => apiResponse(res, titles))
    .catch(() => res.status(500).send("<h1>Internal Server Error</h1>"));
};

module.exports = { gettingTitlesUsingPromises };
