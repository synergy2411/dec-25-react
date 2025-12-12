import { productsCollection } from "@/mongo/db";

// Singular Route

// GET: http://localhost:3000/api/products/[productId]
export async function GET(request, { params }) {
  const { productId } = await params;
  const foundProduct = await productsCollection.findOne({ id: productId });
  if (!foundProduct) {
    throw new Error("Unable to find product");
  }
  return Response.json(foundProduct, { status: 200 });
}

// DELETE: http://localhost:3000/api/products/[productId]
export async function DELETE(request, { params }) {
  const { productId } = await params;
  const deletedRecord = await productsCollection.findOneAndDelete({
    id: productId,
  });
  if (!deletedRecord) {
    return Response.json({
      message: "unable to delete the record for given id " + productId,
    });
  }
  return Response.json({ message: "deleted" }, { status: 200 });
}

export async function PATCH(request, { params }) {
  const { productId } = await params;
  const body = await request.json();
  const updatedRecord = await productsCollection.updateOne(
    { id: productId },
    { $set: body }
  );

  if (!updatedRecord) {
    return Response.json({
      message: "Unable to update",
    });
  }
  return Response.json({ message: "updated" }, { status: 200 });
}
