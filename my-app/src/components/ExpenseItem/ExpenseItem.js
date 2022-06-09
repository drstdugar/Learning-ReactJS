import "./ExpenseItem.css";

import ExpenseItemDate from "../ExpenseItemDate/ExpenseItemDate";

import Card from "../UI/Card/Card";

function ExpenseItem(props) {
  return (
    <Card className="main-wrapper">
      <ExpenseItemDate date={props.expense.date} />
      <div className="item">{props.expense.item}</div>
      <div className="amount">${props.expense.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
