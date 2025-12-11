const sqlite = require("better-sqlite3");
const db = sqlite("courses.db");

export async function getCourses() {
  //   adds 2 seconds delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM courses").all();
}

export function getCourse(courseSlug) {
  return db.prepare("SELECT * FROM courses WHERE slug = ?").get(courseSlug);
}
