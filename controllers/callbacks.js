const { getTitle } = require("../services/callback-tittle");
const { apiResponse } = require("../utils/response");

const gettingTitlesUsingCallbacks = (req, res) => {
  const addresses = req.query.address;
  if (!addresses) {
    return res.status(400).send("<h1>No addresses provided</h1>");
  }
  const addressList = Array.isArray(addresses) ? addresses : [addresses];
  const titles = [];
  let completedRequests = 0;
  addressList.forEach((address, index) => {
    getTitle(address, (err, title) => {
      if (err) {
        titles[index] = { address, title: "NO RESPONSE" };
      } else {
        titles[index] = title;
      }

      completedRequests++;
      if (completedRequests === addressList.length) {
        apiResponse(res, titles);
      }
    });
  });
};

module.exports = { gettingTitlesUsingCallbacks };
