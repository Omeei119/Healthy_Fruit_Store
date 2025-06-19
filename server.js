const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all origins
server.use(cors());

// Other middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Mount API
server.use(router);

// Start server
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

