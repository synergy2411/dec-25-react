import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ closeForm }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("0");
  const [enteredCreatedAt, setEnteredCreatedAt] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Title : ", enteredTitle);
    console.log("Amount : ", enteredAmount);
    console.log("Date : ", enteredCreatedAt);
  };

  return (
    <div className="backdrop">
      <div className="my-dialog">
        <form onSubmit={submitHandler}>
          <h4 className="text-center">Add Your Expense</h4>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
            />
            <label htmlFor="title">Title</label>
            <p>Title : {enteredTitle} </p>
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
              value={enteredAmount}
              onChange={(e) => setEnteredAmount(e.target.value)}
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
              value={enteredCreatedAt}
              onChange={(e) => setEnteredCreatedAt(e.target.value)}
            />
            <label htmlFor="createdAt">Created Date</label>
          </div>

          {/* buttons */}
          <div className="row">
            <div className="col">
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
            <div className="col">
              <div className="d-grid">
                <button
                  onClick={closeForm}
                  type="button"
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
