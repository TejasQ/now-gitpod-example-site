const { readFileSync } = require("fs");
const { join } = require("path");
module.exports = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(readFileSync(join(__dirname, "template.html"), "utf8"));
};