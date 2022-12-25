const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection string

    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("mongo connect " + connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
