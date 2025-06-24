import mongoose from "mongoose";
import chalk from "chalk";

async function connectMongoDb(url) {
  return mongoose.connect(String(url)).then(() => console.log(chalk.blue.bgGreen.bold("Connected!")));
}

export default connectMongoDb;
