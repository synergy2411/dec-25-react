function Expenses() {
  let expense = {
    title: "shopping",
    amount: 99,
    createdAt: new Date("Dec 07, 2025"),
    done: true,
  };

  return (
    <div>
      <h3>Title : {expense.title}</h3>
      <p>Amount : {expense.amount}</p>
      <p>Created At : {expense.createdAt.toISOString()}</p>
      {/* <p>{expense.done ? "Completed" : "Pending"}</p> */}
      {expense.done && <p>Completed</p>}
      {!expense.done && <p>Pending</p>}
    </div>
  );
}

// Only one Default Export
export default Expenses;
