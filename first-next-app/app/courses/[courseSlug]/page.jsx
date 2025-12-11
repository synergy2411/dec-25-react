async function CourseDetailsPage({ params }) {
  const { courseSlug } = await params;
  return (
    <>
      <h1>Course Slug : {courseSlug}</h1>
    </>
  );
}

export default CourseDetailsPage;

// http://localhost:3000/courses/react
// http://localhost:3000/courses/new-course
