import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
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

  return (
    <div className="row">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
}

export default Expenses;

// Functional Interfaces -
// Consumer, Supplier, Predicate,
