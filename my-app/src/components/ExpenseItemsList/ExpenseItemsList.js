import "./ExpenseItemsList.css";

import Card from "../UI/Card/Card";

import ExpenseItem from "./ExpenseItem/ExpenseItem";

function ExpenseItemsList(props) {
  return (
    <Card className="list-wrapper">
      <h2 className="expense-header">Expenses</h2>
      {props.expenses.map((expense, index) => {
        return <ExpenseItem expense={expense} key={index} />;
      })}
    </Card>
  );
}

export default ExpenseItemsList;
