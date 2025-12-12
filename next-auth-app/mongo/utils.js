import { users } from "./db";

export async function createUser(username, password) {
  const foundUser = await users.findOne({ username });
  if (foundUser) {
    throw new Error("User already exists. Try again!");
  }
  const createdUser = await users.insertOne({ username, password });
  if (!createdUser) {
    throw new Error("Unable to create ");
  }
  return createdUser;
}
