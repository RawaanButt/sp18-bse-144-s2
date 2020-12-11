const mongoose = require("mongoose");
const URI =
  "mongodb+srv://dbUser:dbUser@cluster0.77ap2.mongodb.net/s2?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("DB Connected");
};
module.exports = connectDB;
