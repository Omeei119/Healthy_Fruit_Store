// cors.js
module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ✅ Allow all origins
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};
