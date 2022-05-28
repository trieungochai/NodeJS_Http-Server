const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 1,
    name: "Kim Bui Linh Chi",
  },
  {
    id: 2,
    name: "Trieu Ngoc Hai",
  },
  ,
  {
    id: 3,
    name: "Trieu Ngoc Ha",
  },
];

server.on("request", (req, res) => {
  const item = req.url.split("/");
  // console.log(req.url.split("/"));
  if (item[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (item.length === 3) {
      const friendIndex = Number(item[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (item[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>'Hello, Chi!!!'</li>");
    res.write("<li>'What are your thoughts on astronomy?'</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
