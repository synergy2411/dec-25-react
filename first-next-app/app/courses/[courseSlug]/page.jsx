import { getCourse } from "@/lib/courses";
import Image from "next/image";
import classes from "./page.module.css";

async function CourseDetailsPage({ params }) {
  const { courseSlug } = await params;
  const course = getCourse(courseSlug);
  return (
    <>
      <div className={classes["container-box"]}>
        <div className={classes.image}>
          <Image fill src={course.image} alt={course.title} />
        </div>
        <h1>{course.title.toUpperCase()}</h1>
        <p>Duration : {course.duration}Hrs</p>
        <p>
          Created by{" "}
          <a href={`mailto:${course.creator_email}`}>{course.creator}</a>
        </p>
      </div>
    </>
  );
}

export default CourseDetailsPage;

// http://localhost:3000/courses/react
// http://localhost:3000/courses/new-course
