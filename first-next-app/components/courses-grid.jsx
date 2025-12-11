import CourseDetailsPage from "@/app/courses/[courseSlug]/page";
import Link from "next/link";

function CoursesGrid({ courses }) {
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
