const fs = require("node:fs");
const sqlite = require("better-sqlite3");
const slugify = require("slugify");
const db = sqlite("courses.db");

export async function getCourses() {
  //   adds 2 seconds delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM courses").all();
}

export function getCourse(courseSlug) {
  return db.prepare("SELECT * FROM courses WHERE slug = ?").get(courseSlug);
}

export async function saveCourse(course) {
  course.slug = slugify(course.title, { lower: true });

  const extension = course.image.name.split(".").pop();
  const filename = `${course.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await course.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      console.log(err);
    }
  });
  course.image = `/images/${filename}`;

  // inserting data in database
  db.prepare(
    `
      INSERT INTO courses 
        (title, slug, duration, creator, creator_email, image)
      VALUES (
        @title,
        @slug,
        @duration,
        @creator,
        @creator_email,
        @image
      )
    `
  ).run(course);
}
