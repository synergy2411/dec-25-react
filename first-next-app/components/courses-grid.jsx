import CourseDetailsPage from "@/app/courses/[courseSlug]/page";
import { getCourses } from "@/lib/courses";
import Link from "next/link";
import { Suspense } from "react";

async function CoursesGrid() {
  const courses = await getCourses();
  return (
    <div className="row">
      {courses.map((course) => (
        <div className="col-4" key={course.id}>
          <Link href={`/courses/${course.slug}`}>
            <div className="card">
              <div className="card-header">
                <h5 className="text-center">{course.title.toUpperCase()}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CoursesGrid;
