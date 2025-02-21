const apiResponse = (res, titles) => {
  let html = "<html><head></head><body>";
  html += "<h1> Following are the titles of given websites: </h1><ul>";

  titles.forEach((title) => {
    let siteName = title.address.replace(/^https?:\/\//, "").replace(/\/$/, "");

    siteName = siteName.replace(/^www\./, "");

    html += `<li> ${siteName} - "${title.title}" </li>`;
  });

  html += "</ul></body></html>";
  res.send(html);
};

module.exports = { apiResponse };
