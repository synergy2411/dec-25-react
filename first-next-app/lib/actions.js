"use server";

import { saveCourse } from "./courses";

export async function shareCourse(formData) {
  const newCourse = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    image: formData.get("image"),
  };

  saveCourse(newCourse);
}
