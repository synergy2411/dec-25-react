import { validateToken } from "@/lib/jwt/utils";

const dummyTodos = ["grocery", "shopping", "planting"];

export async function GET(request) {
  const authheader = request.headers.get("authorization");
  if (!authheader) {
    Response.json({ message: "Token required" });
  }
  const token = authheader.split(" ")[1]; //"Bearer token"
  const isValidToken = validateToken(token);
  if (isValidToken) {
    return Response.json(dummyTodos);
  }
}
