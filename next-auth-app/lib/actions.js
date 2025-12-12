"use server";

import { createUser } from "@/mongo/utils";
import { redirect } from "next/navigation";
import { hashify } from "./hash";
import { createSession } from "./session";

export async function signup(_, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  let errors = {};

  if (!username.includes("@")) {
    errors.username = "username should be in email format";
  }

  if (password.trim().length < 6) {
    errors.password = "Password should have atleast six characters";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  // Hashed Password
  const hashedPassword = hashify(password);

  // Create user in DB
  await createUser(username, hashedPassword);

  // Create cookie
  await createSession(username);
  redirect("/protected");
}
