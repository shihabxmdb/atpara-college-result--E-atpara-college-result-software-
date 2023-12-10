import mongoose from "mongoose";
const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("db already connected");
    return;
  }
  try {
    mongoose.connect(
      process.env.DB_URI,

      {
        dbName: "result-atpara-college",
      }
    );
    console.log("db connected ......");
  } catch (err) {
    console.log("Connection failed");
    console.log(err);
  }
};
export default dbConnect;
