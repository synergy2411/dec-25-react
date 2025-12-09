import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem({ expense, deleteExpense }) {
  console.log("Expense Item Comp");
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{expense.title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p>Amount : ${expense.amount}</p>
          {/* <p>Created At : {expense.createdAt.toISOString()}</p> */}
          <ExpenseDate createdAt={expense.createdAt} />
          <span className="float-end">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
