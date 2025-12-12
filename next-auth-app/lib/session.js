import { cookies } from "next/headers";
import { createToken } from "./jwt/utils";

export async function createSession(username) {
  const token = createToken(username);
  const cookieStore = await cookies();
  cookieStore.set("sessionCookie", token, {
    expires: 60 * 60,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
