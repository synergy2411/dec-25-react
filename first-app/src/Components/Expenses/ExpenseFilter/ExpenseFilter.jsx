function ExpenseFilter({ filterExpense }) {
  console.log("Expense Filter Comp");
  return (
    <div className="mb-3">
      <select
        className="form-select form-select-lg"
        name=""
        id=""
        onChange={(e) => filterExpense(e.target.value)}
      >
        <option value="">See All</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
