import CoursesGrid from "@/components/courses-grid";
import { Suspense } from "react";
import { BounceLoader } from "react-spinners";

// http://localhost:3000/courses
function CoursesPage() {
  return (
    <>
      <h1>Read our available courses</h1>
      <Suspense fallback={<BounceLoader color="#e96868" size={120} />}>
        <CoursesGrid />
      </Suspense>
    </>
  );
}

export default CoursesPage;
