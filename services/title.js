const http = require("http");
const https = require("https");
const { Promise } = require("rsvp");

const getTitle = (address) => {
  return new Promise((resolve) => {
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
          return resolve(getTitle(response.headers.location));
        }

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          const titleMatch = data.match(/<title>(.*?)<\/title>/i);
          const title = titleMatch ? titleMatch[1].trim() : "NO RESPONSE";
          resolve({ address, title });
        });
      })
      .on("error", () => {
        resolve({ address, title: "NO RESPONSE" });
      });
  });
};

module.exports = { getTitle };
