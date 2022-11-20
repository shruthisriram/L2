const http = require("http");
const fs = require("fs");
let HomeContent = "";
let ProjectContent = "";
let RegContent="";
//reading the file
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  HomeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  ProjectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  RegContent = registration;
});

let args = require("minimist")(process.argv.slice(2));
  http
    .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(ProjectContent);
        response.end();
        break;
      case "/registration":
        response.write(RegContent);
        response.end();
        break;
      default:
        response.write(HomeContent);
        response.end();
        break;
    }
  }).listen(args["port"]);
