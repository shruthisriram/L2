const http = require("http");
const fs = require("fs");
let homeContent = "";
let projectContent = "";
let regContent="";
//reading home file
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});
//reading project file
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
//reading registration file
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  regContent = registration;
});

let args = require("minimist")(process.argv.slice(2));
  http
    .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(regContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  }).listen(args["port"]);
