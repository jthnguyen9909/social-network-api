const { connect, connection } = require("mongoose");

// connection data to mongodb using mongoose
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialnetworkDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
