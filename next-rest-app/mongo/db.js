import { MongoClient } from "mongodb";

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

const client = await MongoClient.connect(
  `mongodb+srv://testuser:W0ysW2TQjBDcrt3K@mydemocluster.azfmt1j.mongodb.net/productdb?appName=MyDemoCluster`
);
console.log("Connected..");

export const db = client.db();

export const productsCollection = db.collection("products");
