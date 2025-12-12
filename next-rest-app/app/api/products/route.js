import { MongoClient } from "mongodb";
const client = await MongoClient.connect(
  "mongodb+srv://testuser:W0ysW2TQjBDcrt3K@mydemocluster.azfmt1j.mongodb.net/productdb?appName=MyDemoCluster"
);
console.log("Connected..");

const db = client.db();

const productsCollection = db.collection("products");

// POST :  http://localhost:3000/api/products => Request Body
export async function POST(request) {
  const { id, name, desc, price, qty } = await request.json();
  const createdProduct = await productsCollection.insertOne({
    id,
    name,
    desc,
    price,
    qty,
  });
  if (createdProduct) {
    return Response.json({ message: "created" }, { status: 201 });
  }
  return Response.json({ error: "Unable to created" }, { status: 501 });
}

// GET :  http://localhost:3000/api/products
export async function GET() {
  const allProducts = await productsCollection.find().toArray();
  return Response.json(allProducts);
}
