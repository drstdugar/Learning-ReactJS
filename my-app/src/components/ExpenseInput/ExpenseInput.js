import { useState } from "react";

import "./ExpenseInput.css";

import Card from "../UI/Card/Card";

function ExpenseInput(props) {
  const [expenseData, setExpenseData] = useState({
    item: "",
    date: "",
    amount: "",
    id: Math.random().toString(),
  });

  const submitExpenseHandler = (event) => {
    event.preventDefault();

    const finalData = { ...expenseData, date: new Date(expenseData?.date) };

    setExpenseData({
      item: "",
      date: "",
      amount: "",
      id: Math.random().toString(),
    });

    props.onAddExpense(finalData);
  };

  const inputChangeHandler = (key, value) => {
    setExpenseData((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <Card className="expense-input">
      <form onSubmit={submitExpenseHandler}>
        <div className="input-wrapper">
          <input
            required
            type="text"
            className="inputs"
            placeholder="Item"
            value={expenseData?.item}
            onChange={(event) =>
              inputChangeHandler("item", event?.target?.value)
            }
          />
          <input
            required
            type="number"
            className="inputs"
            placeholder="Amount"
            value={expenseData?.amount}
            onChange={(event) =>
              inputChangeHandler("amount", event?.target?.value)
            }
          />
          <input
            required
            type="date"
            className="inputs"
            value={expenseData?.date}
            onChange={(event) =>
              inputChangeHandler("date", event?.target?.value)
            }
          />
        </div>
        <button type="submit" className="add-expense">
          Add Expense
        </button>
      </form>
    </Card>
  );
}

export default ExpenseInput;
