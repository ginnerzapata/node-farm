const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the overview");
  }
  if (pathName === "/product") {
    res.end("this is the product");
  } else {
    res.writeHead(404, {
      "Content-type": "txt/html",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listeing to resquests on port 8000");
});
