const http = require("http");
const https = require("https");

const getTitle = (address, callback) => {
  if (!address.startsWith("http://") && !address.startsWith("https://")) {
    address = "http://" + address;
  }

  const protocol = address.startsWith("https") ? https : http;

  protocol
    .get(address, (response) => {
      let data = "";

      if (
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        return getTitle(response.headers.location, callback);
      }

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        const titleMatch = data.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : "NO RESPONSE";
        callback(null, { address, title });
      });
    })
    .on("error", () => {
      callback(null, { address, title: "NO RESPONSE" });
    });
};

module.exports = { getTitle };
