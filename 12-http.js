const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is the about page");
    return;
  }
  res.end(`
    <h1>OOps!</h1>
    <p>Page not found</p>
    <a href="/">Go to home page</a>
  `);
});

server.listen(3002);
