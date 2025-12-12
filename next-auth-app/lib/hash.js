import { compareSync, hashSync } from "bcrypt";

export function hashify(password) {
  return hashSync(password, 12);
}

export function isMatch(hashPassword, password) {
  return compareSync(password, hashPassword);
}
