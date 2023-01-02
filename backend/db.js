const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/swift-key";

const connectToMongo = () => {
  mongoose
      .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection Successful to Database");
    })
    .catch((err) => {
      console.log("No Connection");
      console.log(err);
    });
};

module.exports = connectToMongo;
