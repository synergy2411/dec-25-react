function CoursesGrid({ courses }) {
  return (
    <div className="row">
      {courses.map((course) => (
        <div className="col-4">
          <div className="card">
            <div className="card-header">
              <h5 className="text-center">{course.title.toUpperCase()}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesGrid;
