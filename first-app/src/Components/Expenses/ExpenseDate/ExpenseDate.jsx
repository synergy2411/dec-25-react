function ExpenseDate({ createdAt }) {
  const year = createdAt.getFullYear();
  const month = createdAt.toLocaleString("en-US", { month: "long" });
  const day = createdAt.toLocaleString("en-US", { day: "numeric" });
  return (
    <p>
      Created At : {month} {day}, {year}
    </p>
  );
}

export default ExpenseDate;
