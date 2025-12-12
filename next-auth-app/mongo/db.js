import { MongoClient } from "mongodb";

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

const client = await MongoClient.connect(
  `mongodb+srv://${user}:${password}@mydemocluster.azfmt1j.mongodb.net/usersdb?appName=MyDemoCluster`
);

export const db = client.db();

export const users = db.collection("users");
