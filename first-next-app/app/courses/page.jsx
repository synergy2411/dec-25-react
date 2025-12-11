import CoursesGrid from "@/components/courses-grid";
import { getCourses } from "@/lib/courses";

// http://localhost:3000/courses
async function CoursesPage() {
  const courses = await getCourses();
  return (
    <>
      <h1>Read our available courses</h1>
      <CoursesGrid courses={courses} />
    </>
  );
}

export default CoursesPage;
