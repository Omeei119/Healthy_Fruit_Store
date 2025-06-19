const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors()); // This is must!
server.use(middlewares);
server.use(router);

server.listen(10000, () => {
  console.log("JSON Server is running on port 10000");
});
