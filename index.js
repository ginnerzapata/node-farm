const fs = require("fs");
const http = require("http");

fs.readFile("./txt/start.txt", "utf8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("your file has been writen");
      });
    });
  });
});
