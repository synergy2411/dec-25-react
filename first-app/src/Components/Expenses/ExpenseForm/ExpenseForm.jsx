import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <div className="backdrop">
      <div className="my-dialog">
        <form>
          <h4 className="text-center">Add Your Expense</h4>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
            />
            <label htmlFor="title">Title</label>
          </div>

          {/* amount */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="amount"
              id="amount"
              placeholder=""
              step="0.5"
              min="0.0"
            />
            <label htmlFor="amount">Amount</label>
          </div>

          {/* createdAt */}
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              name="createdAt"
              id="createdAt"
              placeholder=""
              min="2023-04-01"
              max="2026-03-31"
            />
            <label htmlFor="createdAt">Created Date</label>
          </div>

          {/* buttons */}
          <div className="row">
            <div className="col">
              <div className="d-grid">
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
            <div className="col">
              <div className="d-grid">
                <button className="btn btn-secondary">Close</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
