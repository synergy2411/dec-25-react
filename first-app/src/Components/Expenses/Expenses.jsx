import { useState } from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
  const [toggleForm, setToggleForm] = useState(false);

  let expenses = [
    {
      id: "e001",
      title: "shopping",
      amount: 99,
      createdAt: new Date("Dec 07, 2025"),
    },
    {
      id: "e002",
      title: "planting",
      amount: 89,
      createdAt: new Date("Aug 04, 2024"),
    },
    {
      id: "e003",
      title: "grocery",
      amount: 109,
      createdAt: new Date("Sep 14, 2023"),
    },
  ];

  const onShowForm = () => {
    setToggleForm(!toggleForm);
    // toggleForm = true;     // NEVER EVER CHANGE THE STATE MUTABLY
  };

  return (
    <>
      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-primary" onClick={onShowForm}>
              {toggleForm ? "Hide Form" : "Show Form"}
            </button>
          </div>
        </div>
      </div>

      {toggleForm && <ExpenseForm />}

      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem expense={expense} />
        ))}
      </div>
    </>
  );
}

export default Expenses;

// Functional Interfaces -
// Consumer, Supplier, Predicate,
