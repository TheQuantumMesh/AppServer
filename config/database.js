import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL_LOCAL);
  console.log("connection ::::", connection.host);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
};
