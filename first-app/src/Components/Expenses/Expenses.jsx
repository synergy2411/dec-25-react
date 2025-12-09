import { useState } from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

let INITIAL_EXPENSES = [
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

function Expenses() {
  const [toggleForm, setToggleForm] = useState(false);

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const onShowForm = () => {
    setToggleForm(!toggleForm);
    // toggleForm = true;     // NEVER EVER CHANGE THE STATE MUTABLY
  };

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    closeFormHandler();
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((exp) => exp.id !== expenseId)
    );
  };

  const closeFormHandler = () => setToggleForm(false);

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
        <div className="col-4">
          <ExpenseFilter />
        </div>
      </div>

      {toggleForm && (
        <ExpenseForm
          closeForm={closeFormHandler}
          addExpense={addExpenseHandler}
        />
      )}

      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem expense={expense} deleteExpense={deleteExpenseHandler} />
        ))}
      </div>
    </>
  );
}

export default Expenses;

// Functional Interfaces -
// Consumer, Supplier, Predicate,
