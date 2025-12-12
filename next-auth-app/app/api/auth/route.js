import { createToken } from "@/lib/jwt/utils";
import { createSession } from "@/lib/session";
import { createUser } from "@/mongo/utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = request.json();
  await createUser({ username, password });
  //   const token = createToken(username);
  return Response.json(
    { message: "created" },
    {
      headers: new Headers().set("cookies", createSession(username)),
    }
  );
}
