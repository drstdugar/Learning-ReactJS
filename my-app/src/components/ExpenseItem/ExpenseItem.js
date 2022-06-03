import "./ExpenseItem.css";

import Card from "../Card/Card";

function ExpenseItem(props) {
  const date = new Date().toLocaleDateString();
  return (
    <Card className="main-wrapper">
      <h2>Expense Item</h2>
      <div>
        <p>{date}</p>
        <p>{props.expense.item}</p>
        <p>{props.expense.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
