import ImagePicker from "@/components/image-picker";

function ShareCoursePage() {
  return (
    <>
      <div className="row m-3">
        <div className="col-8 offset-2">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">
                Share your learning with community
              </h2>
              <form>
                {/* title */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    placeholder=""
                    required
                  />
                  <label htmlFor="title">Course Title</label>
                </div>

                {/* creator */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="creator"
                    id="creator"
                    placeholder=""
                    required
                  />
                  <label htmlFor="creator">Your Name</label>
                </div>
                {/* creator_email */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="creator_email"
                    id="creator_email"
                    placeholder=""
                    required
                  />
                  <label htmlFor="creator_email">Your Email</label>
                </div>
                {/* duration */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="duration"
                    id="duration"
                    placeholder=""
                    required
                  />
                  <label htmlFor="duration">Course Duration</label>
                </div>
                {/* image */}
                <ImagePicker />

                {/* button */}
                <div className="row">
                  <div className="col-4 offset-8">
                    <div className="d-grid">
                      <button className="btn btn-primary">Share</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareCoursePage;

//  http://localhost:3000/share
