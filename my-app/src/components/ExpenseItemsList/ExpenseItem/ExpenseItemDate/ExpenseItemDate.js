import "./ExpenseItemDate.css";

function ExpenseItemDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <div className="expense-item-date">
      <div className="month dates">{month}</div>
      <div className="day dates">{day}</div>
      <div className="year dates">{year}</div>
    </div>
  );
}

export default ExpenseItemDate;
