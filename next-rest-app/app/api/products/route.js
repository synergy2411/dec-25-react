import { productsCollection } from "@/mongo/db";

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
  return Response.json(allProducts, { status: 200 });
}

// Singular Route
// GET: http://localhost:3000/api/products/[productId]
