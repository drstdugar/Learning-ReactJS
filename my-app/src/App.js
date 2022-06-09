import { useState } from "react";

import "./App.css";
import "./css/Global.css";

import Header from "./components/Header/Header";
import ExpenseInput from "./components/ExpenseInput/ExpenseInput";
import ExpenseItemList from "./components/ExpenseItemsList/ExpenseItemsList";

function App() {
  const expenses = [
    {
      id: 1,
      item: "Car",
      amount: "100",
      date: new Date("2020-01-01"),
    },
    {
      id: 2,
      item: "Vase",
      amount: "70",
      date: new Date("2022-01-01"),
    },
    {
      id: 3,
      item: "Phone",
      amount: "90",
      date: new Date("2021-01-01"),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="main">
      <Header headerText="ExpenseTracker" />
      <div className="expense-wrapper">
        <ExpenseInput onAddExpense={addExpenseHandler} />
        <ExpenseItemList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
