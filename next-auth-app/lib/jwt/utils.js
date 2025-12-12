import { sign, verify } from "jsonwebtoken";

export function createToken(username) {
  return sign({ username }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60,
  });
}

export function validateToken(token) {
  try {
    const { username } = verify(token, process.env.SECRET_KEY);
    // if user exists in DB
    return true;
  } catch (err) {
    throw new Error("Malformed Token");
  }
}
