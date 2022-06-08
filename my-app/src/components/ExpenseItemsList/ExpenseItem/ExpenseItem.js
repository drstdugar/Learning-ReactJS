import "./ExpenseItem.css";

import ExpenseItemDate from "./ExpenseItemDate/ExpenseItemDate";

import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  const date = new Date();
  return (
    <Card className="main-wrapper">
      <ExpenseItemDate date={date} />
      <div className="item">{props.expense.item}</div>
      <div className="amount">{props.expense.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
