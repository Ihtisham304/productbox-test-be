const async = require("async");
const { getTitle } = require("../services/title");
const { apiResponse } = require("../utils/response");

const gettingTitlesUsingAsync = (req, res) => {
  const addresses = req.query.address;
  if (!addresses) {
    return res.status(400).send("<h1>No addresses provided</h1>");
  }

  const addressList = Array.isArray(addresses) ? addresses : [addresses];

  async.map(
    addressList,
    (address, callback) => {
      getTitle(address)
        .then((title) => callback(null, title))
        .catch(() => callback(null, { address, title: "NO RESPONSE" }));
    },
    (err, results) => {
      if (err) {
        return res.status(500).send("<h1>Internal Server Error</h1>");
      }
      apiResponse(res, results);
    }
  );
};

module.exports = { gettingTitlesUsingAsync };