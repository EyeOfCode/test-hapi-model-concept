import Mongoose from "mongoose";

const ConnectDB = async () => {
  await Mongoose.connect(
    `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`
  );

  const db = Mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function callback() {
    console.log("Connection with database succeeded.");
  });
  return db;
};

export default ConnectDB;
