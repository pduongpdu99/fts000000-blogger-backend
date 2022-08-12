const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

const CONFIG = dotenv.config().parsed;

mongoose
  .connect(CONFIG.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((what) => {
    console.log("Connect successful");
  })
  .catch((err) => {
    console.log("Error:", err);
  });
module.exports = mongoose;
