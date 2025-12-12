import { createToken } from "@/lib/jwt/utils";

export async function POST(request) {
  const { username, password } = await request.json();
  // validate data from database

  const token = createToken(username);

  return Response.json({ token }, { status: "200" });
}
